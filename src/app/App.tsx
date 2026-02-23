import { useState, useEffect, useMemo } from "react";
import { Job, Filters, SortOption } from "../types/job";
import {
  fetchJobs,
  fetchPaginatedJobs,
  fetchInfiniteScrollJobs,
} from "../services/jobsApi";
import { mockJobs } from "../data/mockJobs";
import { APP_CONFIG, isLiveAPI } from "../config/app.config";
import { useDebounce } from "../hooks/useDebounce";
import {
  filterJobs,
  sortJobs,
  getUniqueLocations,
  getUniqueCategories,
  getUniqueEmploymentTypes,
  getSalaryRange,
} from "../utils/jobFilters";
import { exportToCSV, exportToPDF } from "../utils/exportUtils";
import { FigmaHeader } from "./components/FigmaHeader";
import { FigmaFilterSidebar } from "./components/FigmaFilterSidebar";
import { FigmaJobCard } from "./components/FigmaJobCard";
import { FigmaActiveFilters } from "./components/FigmaActiveFilters";
import { FigmaViewToggle } from "./components/FigmaViewToggle";
import { JobSkeletonList } from "./components/JobSkeleton";
import { PaginationControls } from "./components/PaginationControls";
import { InfiniteScrollTrigger } from "./components/InfiniteScrollTrigger";
import { ScrollToTop } from "./components/ScrollToTop";
import { Alert, AlertDescription } from "./components/ui/alert";
import { Button } from "./components/ui/button";
import { AlertCircle } from "lucide-react";

const ITEMS_PER_PAGE = 12;

type ViewMode = "grid" | "list";

function App() {
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [searchInput, setSearchInput] = useState("");
  const [isPaginationMode, setIsPaginationMode] = useState(true);

  const [filters, setFilters] = useState<Filters>({
    search: "",
    location: "",
    employmentTypes: [],
    jobCategory: "",
    remoteOnly: false,
    salaryMin: 0,
    salaryMax: 200000,
    minOpenings: 0,
    createdWithin: null,
  });

  const [sortOption, setSortOption] = useState<SortOption>("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [infiniteScrollPage, setInfiniteScrollPage] = useState(1);

  // Load jobs on mount
  const loadJobs = async () => {
    try {
      setIsLoading(true);
      setError(null);

      if (isLiveAPI()) {
        // Fetch jobs from JSONFakery API
        const jobs = await fetchJobs();
        setAllJobs(jobs);
      } else {
        // Use mock data for development/testing
        await new Promise((resolve) => setTimeout(resolve, 800));
        setAllJobs(mockJobs);
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Failed to load jobs. Please try again later.";
      setError(errorMessage);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  // Get unique values for filters
  const locations = useMemo(() => getUniqueLocations(allJobs), [allJobs]);
  const categories = useMemo(() => getUniqueCategories(allJobs), [allJobs]);
  const employmentTypes = useMemo(
    () => getUniqueEmploymentTypes(allJobs),
    [allJobs],
  );
  const salaryRange = useMemo(() => getSalaryRange(allJobs), [allJobs]);

  // Update salary range in filters when data loads
  useEffect(() => {
    if (allJobs.length > 0 && filters.salaryMax === 200000) {
      setFilters((prev) => ({
        ...prev,
        salaryMin: salaryRange[0],
        salaryMax: salaryRange[1],
      }));
    }
  }, [allJobs, salaryRange]);

  // Apply filters and sorting
  const filteredAndSortedJobs = useMemo(() => {
    const filtered = filterJobs(allJobs, filters);
    return sortJobs(filtered, sortOption);
  }, [allJobs, filters, sortOption]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedJobs.length / ITEMS_PER_PAGE);
  const paginatedJobs = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredAndSortedJobs.slice(start, end);
  }, [filteredAndSortedJobs, currentPage]);

  // Infinite scroll
  const infiniteScrollJobs = useMemo(() => {
    return filteredAndSortedJobs.slice(0, infiniteScrollPage * ITEMS_PER_PAGE);
  }, [filteredAndSortedJobs, infiniteScrollPage]);

  const displayedJobs = isPaginationMode ? paginatedJobs : infiniteScrollJobs;

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
    setInfiniteScrollPage(1);
  }, [filters, sortOption]);

  const handleFiltersChange = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  const handleSearch = (search: string) => {
    setSearchInput(search);
    setFilters({ ...filters, search });
  };

  const handleRemoveFilter = (key: keyof Filters, value?: string) => {
    if (key === "employmentTypes" && value) {
      setFilters({
        ...filters,
        employmentTypes: filters.employmentTypes.filter((t) => t !== value),
      });
    } else if (key === "salaryMin" || key === "salaryMax") {
      setFilters({
        ...filters,
        salaryMin: salaryRange[0],
        salaryMax: salaryRange[1],
      });
    } else if (key === "remoteOnly") {
      setFilters({ ...filters, remoteOnly: false });
    } else if (key === "minOpenings") {
      setFilters({ ...filters, minOpenings: 0 });
    } else if (key === "createdWithin") {
      setFilters({ ...filters, createdWithin: null });
    } else {
      setFilters({
        ...filters,
        [key]: key === "employmentTypes" ? [] : "",
      });
    }
  };

  const handleClearAllFilters = () => {
    setFilters({
      search: "",
      location: "",
      employmentTypes: [],
      jobCategory: "",
      remoteOnly: false,
      salaryMin: salaryRange[0],
      salaryMax: salaryRange[1],
      minOpenings: 0,
      createdWithin: null,
    });
    setSearchInput("");
  };

  const handleLoadMore = () => {
    setInfiniteScrollPage((prev) => prev + 1);
  };

  const hasMoreInfiniteScroll =
    infiniteScrollJobs.length < filteredAndSortedJobs.length;

  const handleExportCSV = () => {
    exportToCSV(filteredAndSortedJobs);
  };

  const handleExportPDF = () => {
    exportToPDF(filteredAndSortedJobs, filters);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-background">
      {/* Header */}
      <FigmaHeader
        searchInput={searchInput}
        onSearchChange={handleSearch}
        onExportCSV={handleExportCSV}
        onExportPDF={handleExportPDF}
      />

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="hidden lg:block lg:w-[288px] shrink-0">
            <div className="sticky top-24">
              {!isLoading && (
                <FigmaFilterSidebar
                  filters={filters}
                  onFiltersChange={handleFiltersChange}
                  locations={locations}
                  categories={categories}
                  employmentTypes={employmentTypes}
                  salaryRange={salaryRange}
                />
              )}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {!isLoading && !error && (
              <div className="space-y-4">
                {/* Header with job count and controls */}
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-[#0f172a] dark:text-foreground leading-8">
                      {filteredAndSortedJobs.length.toLocaleString()} Jobs Found
                    </h2>
                    <p className="text-sm text-[#64748b] mt-1">
                      Showing the latest tech opportunities
                    </p>
                  </div>
                  <FigmaViewToggle
                    viewMode={viewMode}
                    onViewModeChange={setViewMode}
                    sortOption={sortOption}
                    onSortChange={setSortOption}
                    isPaginationMode={isPaginationMode}
                    onPaginationModeChange={setIsPaginationMode}
                  />
                </div>

                {/* Active Filters */}
                <FigmaActiveFilters
                  filters={filters}
                  onRemoveFilter={handleRemoveFilter}
                  onClearAll={handleClearAllFilters}
                />

                {/* Job Grid */}
                {displayedJobs.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-[#64748b]">
                      No jobs found matching your filters.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={handleClearAllFilters}
                    >
                      Clear Filters
                    </Button>
                  </div>
                ) : (
                  <>
                    <div
                      className={
                        viewMode === "grid"
                          ? "grid grid-cols-1 md:grid-cols-2 gap-4"
                          : "space-y-4"
                      }
                    >
                      {displayedJobs.map((job) => (
                        <FigmaJobCard key={job.id} job={job} />
                      ))}
                    </div>

                    {/* Pagination */}
                    {filteredAndSortedJobs.length > ITEMS_PER_PAGE && (
                      <div className="mt-8">
                        {isPaginationMode ? (
                          <div className="flex items-center justify-center">
                            <PaginationControls
                              currentPage={currentPage}
                              totalPages={totalPages}
                              onPageChange={setCurrentPage}
                            />
                          </div>
                        ) : (
                          <InfiniteScrollTrigger
                            onLoadMore={handleLoadMore}
                            hasMore={hasMoreInfiniteScroll}
                            isLoading={false}
                          />
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            {/* Loading State */}
            {isLoading && <JobSkeletonList count={6} />}

            {/* Error State */}
            {error && (
              <div className="space-y-4">
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
                <div className="text-center">
                  <Button onClick={loadJobs} variant="outline">
                    Retry
                  </Button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t mt-12 py-6 bg-white dark:bg-background">
        <div className="container mx-auto px-4 text-center text-sm text-[#64748b]">
          <p>© 2023 CareerHub Job Discovery Platform. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
