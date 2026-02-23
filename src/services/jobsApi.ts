import axios from "axios";
import { Job } from "../types/job";

const BASE_URL = "https://jsonfakery.com/jobs";

// API Response types
export interface PaginatedResponse {
  data: Job[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string | null;
  prev_page_url: string | null;
  path: string;
  from: number;
  to: number;
  links: Array<{
    url: string | null;
    label: string;
    active: boolean;
  }>;
}

export interface SimplePaginatedResponse {
  data: Job[];
  next_page_url: string | null;
  prev_page_url: string | null;
}

export interface InfiniteScrollResponse {
  data: Job[];
  next_page_url: string | null;
}

/**
 * Fetch all jobs (mock data)
 */
export const fetchJobs = async (): Promise<Job[]> => {
  try {
    const response = await axios.get<Job[]>(BASE_URL, {
      headers: {
        Accept: "application/json",
        method: "GET",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw new Error("Failed to fetch jobs. Please try again later.");
  }
};

/**
 * Fetch paginated jobs
 */
export const fetchPaginatedJobs = async (
  page: number = 1
): Promise<PaginatedResponse> => {
  try {
    const response = await axios.get<PaginatedResponse>(
      `${BASE_URL}/paginated`,
      {
        params: { page },
        headers: {
          Accept: "application/json",
          method: "GET",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching paginated jobs:", error);
    throw new Error("Failed to fetch paginated jobs. Please try again later.");
  }
};

/**
 * Fetch jobs with simple pagination
 */
export const fetchSimplePaginatedJobs = async (
  page: number = 1
): Promise<SimplePaginatedResponse> => {
  try {
    const response = await axios.get<SimplePaginatedResponse>(
      `${BASE_URL}/simple-paginate`,
      {
        params: { page },
        headers: {
          Accept: "application/json",
          method: "GET",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching simple paginated jobs:", error);
    throw new Error(
      "Failed to fetch simple paginated jobs. Please try again later."
    );
  }
};

/**
 * Fetch jobs for infinite scrolling
 */
export const fetchInfiniteScrollJobs = async (
  page: number = 1
): Promise<InfiniteScrollResponse> => {
  try {
    const response = await axios.get<InfiniteScrollResponse>(
      `${BASE_URL}/infinite-scroll`,
      {
        params: { page },
        headers: {
          Accept: "application/json",
          method: "GET",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching infinite scroll jobs:", error);
    throw new Error(
      "Failed to fetch infinite scroll jobs. Please try again later."
    );
  }
};

/**
 * Fetch a single random job
 */
export const fetchRandomJob = async (): Promise<Job> => {
  try {
    const response = await axios.get<Job>(`${BASE_URL}/random`, {
      headers: {
        Accept: "application/json",
        method: "GET",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching random job:", error);
    throw new Error("Failed to fetch random job. Please try again later.");
  }
};

/**
 * Fetch multiple random jobs
 */
export const fetchRandomJobs = async (count: number = 3): Promise<Job[]> => {
  try {
    const response = await axios.get<Job[]>(`${BASE_URL}/random/${count}`, {
      headers: {
        Accept: "application/json",
        method: "GET",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching random jobs:", error);
    throw new Error("Failed to fetch random jobs. Please try again later.");
  }
};

/**
 * Fetch jobs from a custom URL (for pagination links)
 */
export const fetchJobsFromUrl = async (url: string): Promise<any> => {
  try {
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
        method: "GET",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs from URL:", error);
    throw new Error("Failed to fetch jobs. Please try again later.");
  }
};