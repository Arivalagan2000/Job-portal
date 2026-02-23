import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { Job, Filters } from "../types/job";

export const exportToCSV = (jobs: Job[]): void => {
  const headers = [
    "Title",
    "Company",
    "Location",
    "Salary From",
    "Salary To",
    "Employment Type",
    "Job Category",
    "Remote",
    "Openings",
    "Created At",
  ];

  const rows = jobs.map((job) => [
    job.title,
    job.company,
    job.location,
    job.salary_from.toString(),
    job.salary_to.toString(),
    job.employment_type,
    job.job_category,
    job.is_remote_work === 1 ? "Yes" : "No",
    (job.openings || 0).toString(),
    job.created_at || "",
  ]);

  const csvContent = [headers, ...rows]
    .map((row) =>
      row
        .map((cell) => {
          // Escape double quotes and wrap in quotes
          const escaped = String(cell).replace(/"/g, '""');
          return `"${escaped}"`;
        })
        .join(",")
    )
    .join("\n");

  // Add BOM for Excel UTF-8 compatibility
  const bom = "\uFEFF";
  const blob = new Blob([bom + csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute(
    "download",
    `jobs_export_${new Date().toISOString().slice(0, 10)}.csv`
  );
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const exportToPDF = (jobs: Job[], filters: Filters): void => {
  const doc = new jsPDF({ orientation: "landscape" });
  const pageWidth = doc.internal.pageSize.width;

  // ── Title ──────────────────────────────────────────────────────────────────
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(15, 23, 42); // #0f172a
  doc.text("Filtered Job Results", 14, 20);

  // Decorative line under title
  doc.setDrawColor(36, 172, 235); // cyan brand color
  doc.setLineWidth(0.8);
  doc.line(14, 24, pageWidth - 14, 24);

  // ── Applied Filters Section ────────────────────────────────────────────────
  let yPosition = 32;
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(36, 172, 235);
  doc.text("Applied Filters:", 14, yPosition);
  yPosition += 6;

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105); // slate-600

  const activeFilters: string[] = [];
  if (filters.search) activeFilters.push(`Search: "${filters.search}"`);
  if (filters.location) activeFilters.push(`Location: ${filters.location}`);
  if (filters.employmentTypes.length > 0)
    activeFilters.push(`Employment Type: ${filters.employmentTypes.join(", ")}`);
  if (filters.jobCategory)
    activeFilters.push(`Category: ${filters.jobCategory}`);
  if (filters.remoteOnly) activeFilters.push("Remote Only: Yes");
  if (filters.salaryMin > 0 || filters.salaryMax < 200000)
    activeFilters.push(
      `Salary Range: $${filters.salaryMin.toLocaleString()} – $${filters.salaryMax.toLocaleString()}`
    );
  if (filters.minOpenings > 0)
    activeFilters.push(`Min Openings: ${filters.minOpenings}`);
  if (filters.createdWithin)
    activeFilters.push(`Created Within: Last ${filters.createdWithin} days`);

  if (activeFilters.length === 0) {
    doc.text("• No filters applied — showing all results", 14, yPosition);
    yPosition += 7;
  } else {
    // Render filters in two columns
    const mid = Math.ceil(activeFilters.length / 2);
    const leftCol = activeFilters.slice(0, mid);
    const rightCol = activeFilters.slice(mid);
    leftCol.forEach((f, i) => {
      doc.text(`• ${f}`, 14, yPosition + i * 6);
    });
    rightCol.forEach((f, i) => {
      doc.text(`• ${f}`, pageWidth / 2, yPosition + i * 6);
    });
    yPosition += Math.max(leftCol.length, rightCol.length) * 6 + 2;
  }

  yPosition += 4;

  // ── Jobs Table ─────────────────────────────────────────────────────────────
  const tableData = jobs.map((job) => [
    job.title,
    job.company,
    job.location,
    `$${job.salary_from.toLocaleString()}`,
    `$${job.salary_to.toLocaleString()}`,
    job.employment_type,
    job.job_category || "—",
    job.is_remote_work === 1 ? "Yes" : "No",
    (job.openings || 0).toString(),
    job.created_at ? job.created_at.slice(0, 10) : "—",
  ]);

  autoTable(doc, {
    head: [
      [
        "Title",
        "Company",
        "Location",
        "Salary From",
        "Salary To",
        "Emp. Type",
        "Category",
        "Remote",
        "Openings",
        "Created At",
      ],
    ],
    body: tableData,
    startY: yPosition,
    styles: {
      fontSize: 7.5,
      cellPadding: 2.5,
      overflow: "linebreak",
    },
    headStyles: {
      fillColor: [36, 172, 235],
      textColor: 255,
      fontStyle: "bold",
      fontSize: 8,
    },
    alternateRowStyles: {
      fillColor: [248, 250, 252],
    },
    columnStyles: {
      0: { cellWidth: 42 }, // Title
      1: { cellWidth: 30 }, // Company
      2: { cellWidth: 28 }, // Location
      3: { cellWidth: 20 }, // Salary From
      4: { cellWidth: 20 }, // Salary To
      5: { cellWidth: 22 }, // Emp. Type
      6: { cellWidth: 22 }, // Category
      7: { cellWidth: 14 }, // Remote
      8: { cellWidth: 16 }, // Openings
      9: { cellWidth: 20 }, // Created At
    },
    margin: { left: 14, right: 14 },
    didDrawPage: (data) => {
      // ── Per-page footer ────────────────────────────────────────────────────
      const pageHeight = doc.internal.pageSize.height;
      const pageNum = (doc as any).internal.getCurrentPageInfo().pageNumber;
      const totalPages = (doc as any).internal.getNumberOfPages();

      doc.setFontSize(7.5);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(100, 116, 139); // slate-500

      // Left: timestamp + count
      const footerLeft = `Generated: ${new Date().toLocaleString()}  |  Total Results: ${jobs.length}`;
      doc.text(footerLeft, 14, pageHeight - 7);

      // Right: page number
      const footerRight = `Page ${pageNum} of ${totalPages}`;
      const rightX = pageWidth - 14 - doc.getTextWidth(footerRight);
      doc.text(footerRight, rightX, pageHeight - 7);

      // Thin footer line
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.3);
      doc.line(14, pageHeight - 10, pageWidth - 14, pageHeight - 10);
    },
  });

  doc.save(
    `jobs_export_${new Date().toISOString().slice(0, 10)}.pdf`
  );
};