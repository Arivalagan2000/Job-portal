import { Job, Filters, SortOption } from "../types/job";

export const filterJobs = (jobs: Job[], filters: Filters): Job[] => {
  return jobs.filter((job) => {
    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesSearch =
        job.title.toLowerCase().includes(searchLower) ||
        job.company.toLowerCase().includes(searchLower) ||
        job.description.toLowerCase().includes(searchLower);
      if (!matchesSearch) return false;
    }

    // Location filter
    if (filters.location && job.location !== filters.location) {
      return false;
    }

    // Employment type filter (case-insensitive comparison)
    if (filters.employmentTypes.length > 0) {
      const jobType = job.employment_type?.trim();
      const matchesType = filters.employmentTypes.some(
        filterType => filterType.toLowerCase() === jobType?.toLowerCase()
      );
      if (!matchesType) {
        // Debug logging (can be removed in production)
        if (process.env.NODE_ENV === 'development') {
          console.log('Job filtered out:', {
            jobTitle: job.title,
            jobType: jobType,
            selectedTypes: filters.employmentTypes
          });
        }
        return false;
      }
    }

    // Job category filter
    if (filters.jobCategory && job.job_category !== filters.jobCategory) {
      return false;
    }

    // Remote only filter
    if (filters.remoteOnly && job.is_remote_work !== 1) {
      return false;
    }

    // Salary range filter
    const avgSalary = (job.salary_from + job.salary_to) / 2;
    if (avgSalary < filters.salaryMin || avgSalary > filters.salaryMax) {
      return false;
    }

    // Minimum openings filter
    if (filters.minOpenings > 0) {
      const openings = job.openings || 0;
      if (openings < filters.minOpenings) {
        return false;
      }
    }

    // Created within filter
    if (filters.createdWithin && job.created_at) {
      const jobDate = new Date(job.created_at);
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - filters.createdWithin);
      if (jobDate < cutoffDate) {
        return false;
      }
    }

    return true;
  });
};

export const sortJobs = (jobs: Job[], sortOption: SortOption): Job[] => {
  const sorted = [...jobs];

  switch (sortOption) {
    case "newest":
      return sorted.sort((a, b) => {
        if (!a.created_at || !b.created_at) return 0;
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      });
    case "oldest":
      return sorted.sort((a, b) => {
        if (!a.created_at || !b.created_at) return 0;
        return (
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        );
      });
    case "salary-high":
      return sorted.sort((a, b) => {
        const avgA = (a.salary_from + a.salary_to) / 2;
        const avgB = (b.salary_from + b.salary_to) / 2;
        return avgB - avgA;
      });
    case "salary-low":
      return sorted.sort((a, b) => {
        const avgA = (a.salary_from + a.salary_to) / 2;
        const avgB = (b.salary_from + b.salary_to) / 2;
        return avgA - avgB;
      });
    case "most-openings":
      return sorted.sort((a, b) => {
        const openingsA = a.openings || 0;
        const openingsB = b.openings || 0;
        return openingsB - openingsA;
      });
    default:
      return sorted;
  }
};

export const getUniqueLocations = (jobs: Job[]): string[] => {
  const locations = new Set<string>();
  jobs.forEach((job) => locations.add(job.location));
  return Array.from(locations).sort();
};

export const getUniqueCategories = (jobs: Job[]): string[] => {
  const categories = new Set<string>();
  jobs.forEach((job) => categories.add(job.job_category));
  return Array.from(categories).sort();
};

export const getUniqueEmploymentTypes = (jobs: Job[]): string[] => {
  const types = new Set<string>();
  jobs.forEach((job) => {
    if (job.employment_type) {
      types.add(job.employment_type.trim());
    }
  });
  return Array.from(types).sort();
};

export const getSalaryRange = (jobs: Job[]): [number, number] => {
  if (jobs.length === 0) return [0, 200000];

  let min = Infinity;
  let max = -Infinity;

  jobs.forEach((job) => {
    if (job.salary_from < min) min = job.salary_from;
    if (job.salary_to > max) max = job.salary_to;
  });

  return [Math.floor(min / 1000) * 1000, Math.ceil(max / 1000) * 1000];
};