export interface Job {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  salary_from: number;
  salary_to: number;
  employment_type: "Full-Time" | "Part-Time" | "Contract" | "Internship";
  application_deadline: string;
  qualifications: string;
  contact: string;
  job_category: string;
  is_remote_work: number;
  openings?: number;
  created_at?: string;
}

export interface PaginatedResponse {
  data: Job[];
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
}

export interface Filters {
  search: string;
  location: string;
  employmentTypes: string[];
  jobCategory: string;
  remoteOnly: boolean;
  salaryMin: number;
  salaryMax: number;
  minOpenings: number;
  createdWithin: number | null; // 7 or 30 days, null for all
}

export type SortOption =
  | "newest"
  | "oldest"
  | "salary-high"
  | "salary-low"
  | "most-openings";
