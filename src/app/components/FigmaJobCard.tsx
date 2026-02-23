import { Job } from "../../types/job";
import { useState } from "react";
import {
  MapPin,
  DollarSign,
  Briefcase,
  Calendar,
  Heart,
  ArrowRight,
} from "lucide-react";
import { format } from "date-fns";

interface FigmaJobCardProps {
  job: Job;
}

export function FigmaJobCard({ job }: FigmaJobCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  // Generate company initials
  const getCompanyInitials = (company: string) => {
    return company
      .split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  // Generate consistent color based on company name
  const getCompanyColor = (company: string) => {
    const colors = [
      "#0f172a", // slate-900
      "#1e40af", // blue-800
      "#7c2d12", // orange-900
      "#14532d", // green-900
      "#581c87", // purple-900
      "#991b1b", // red-900
    ];
    const hash = company
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  const companyColor = getCompanyColor(job.company);

  return (
    <div className="bg-white dark:bg-card rounded-xl border border-[#e2e8f0] dark:border-border p-5 hover:shadow-md transition-shadow">
      <div className="space-y-4">
        {/* Header: Logo, Title, Favorite */}
        <div className="flex gap-4">
          {/* Company Logo */}
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0"
            style={{ backgroundColor: companyColor }}
          >
            {getCompanyInitials(job.company)}
          </div>

          {/* Title and Company */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-[#0f172a] dark:text-foreground leading-6 truncate">
              {job.title}
            </h3>
            <p className="text-sm font-medium text-[#64748b] dark:text-muted-foreground mt-1">
              {job.company} · {job.job_category}
            </p>
          </div>

          {/* Favorite Button */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="shrink-0 self-start"
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite
                  ? "fill-red-500 text-red-500"
                  : "text-[#cbd5e1] hover:text-[#94a3b8]"
              } transition-colors`}
            />
          </button>
        </div>

        {/* Job Details Grid */}
        <div className="grid grid-cols-2 gap-y-4 text-xs text-[#64748b]">
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3 shrink-0" />
            <span className="truncate">{job.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-3 h-3 shrink-0" />
            <span className="truncate">
              ${(job.salary_from / 1000).toFixed(0)}k - $
              {(job.salary_to / 1000).toFixed(0)}k
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="w-3 h-3 shrink-0" />
            <span className="truncate">{job.employment_type}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-3 h-3 shrink-0" />
            <span className="truncate">
              Ends:{" "}
              {job.application_deadline
                ? format(new Date(job.application_deadline), "MMM d, yyyy")
                : "N/A"}
            </span>
          </div>
        </div>

        {/* Tags and Apply Button */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex gap-2 flex-wrap">
            {job.is_remote_work === 1 && (
              <span className="bg-[rgba(36,172,235,0.1)] text-[#24aceb] text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">
                Remote
              </span>
            )}
            <span className="bg-[#f1f5f9] text-[#475569] text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">
              {job.employment_type.replace("-", " ")}
            </span>
          </div>

          <button className="flex items-center gap-1 text-[#24aceb] hover:text-[#1e9dd6] font-bold text-sm transition-colors">
            Apply
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
