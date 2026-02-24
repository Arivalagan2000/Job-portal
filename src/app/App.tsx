import { useState, useEffect, useMemo } from "react";
import { Job, Filters, SortOption } from "../types/job";
import {
  fetchPaginatedJobs,
  fetchInfiniteScrollJobs,
} from "../services/jobsApi";
import { mockJobs } from "../data/mockJobs";
import { isLiveAPI } from "../config/app.config";
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

/** Normalize API job data to match the Job interface */
const normalizeJob = (job: any): Job => ({
  ...job,
  openings: job.number_of_opening ?? job.openings,
  qualifications: Array.isArray(job.qualifications)
    ? JSON.stringify(job.qualifications)
    : job.qualifications,
});

function App() {
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
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

  // Server-side pagination metadata
  const [serverTotalPages, setServerTotalPages] = useState(0);
  const [serverTotal, setServerTotal] = useState(0);
  const [hasMoreFromServer, setHasMoreFromServer] = useState(true);

  // --- Data loading functions ---

  /** Fetch a single page from the paginated API */
  const loadPaginatedPage = async (page: number) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetchPaginatedJobs(page);
      setAllJobs(response.data.map(normalizeJob));
      setServerTotalPages(response.last_page);
      setServerTotal(response.total);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to load jobs. Please try again later.",
      );
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  /** Fetch the first page for infinite scroll mode */
  const loadInfiniteInitial = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetchInfiniteScrollJobs(1);
      setAllJobs(response.data.map(normalizeJob));
      setHasMoreFromServer(!!response.next_page_url);
      setInfiniteScrollPage(1);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to load jobs. Please try again later.",
      );
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  /** Append the next page for infinite scroll */
  const loadMoreInfinite = async () => {
    if (isLoadingMore || !hasMoreFromServer) return;
    try {
      setIsLoadingMore(true);
      const nextPage = infiniteScrollPage + 1;
      const response = await fetchInfiniteScrollJobs(nextPage);
      const newJobs = response.data.map(normalizeJob);
      setAllJobs((prev) => [...prev, ...newJobs]);
      setHasMoreFromServer(!!response.next_page_url);
      setInfiniteScrollPage(nextPage);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoadingMore(false);
    }
  };

  /** Load mock data for development/testing */
  const loadMockJobs = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await new Promise((resolve) => setTimeout(resolve, 800));
      setAllJobs(mockJobs);
    } catch (err) {
      setError("Failed to load jobs. Please try again later.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // --- Initial load ---
  useEffect(() => {
    if (!isLiveAPI()) {
      loadMockJobs();
      return;
    }
    if (isPaginationMode) {
      loadPaginatedPage(1);
    } else {
      loadInfiniteInitial();
    }
  }, []);

  // --- Derived filter options ---
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

  // --- Client-side filtering & sorting on loaded data ---
  const filteredAndSortedJobs = useMemo(() => {
    const filtered = filterJobs(allJobs, filters);
    return sortJobs(filtered, sortOption);
  }, [allJobs, filters, sortOption]);

  // --- Display logic ---
  const displayedJobs = useMemo(() => {
    if (isPaginationMode) {
      if (isLiveAPI()) {
        // Server already paginated — show all loaded (filtered) data
        return filteredAndSortedJobs;
      }
      // Client-side pagination for mock data
      const start = (currentPage - 1) * ITEMS_PER_PAGE;
      return filteredAndSortedJobs.slice(start, start + ITEMS_PER_PAGE);
    }
    // Infinite scroll
    if (isLiveAPI()) {
      // Server provides data incrementally — show all accumulated (filtered) data
      return filteredAndSortedJobs;
    }
    // Client-side infinite scroll for mock data
    return filteredAndSortedJobs.slice(0, infiniteScrollPage * ITEMS_PER_PAGE);
  }, [filteredAndSortedJobs, currentPage, infiniteScrollPage, isPaginationMode]);

  const totalPages = useMemo(() => {
    if (isLiveAPI() && isPaginationMode) {
      return serverTotalPages;
    }
    return Math.ceil(filteredAndSortedJobs.length / ITEMS_PER_PAGE);
  }, [filteredAndSortedJobs, serverTotalPages, isPaginationMode]);

  const hasMoreInfiniteScroll = isLiveAPI()
    ? hasMoreFromServer
    : filteredAndSortedJobs.slice(0, infiniteScrollPage * ITEMS_PER_PAGE)
        .length < filteredAndSortedJobs.length;

  // --- Event handlers ---

  // Reset pagination when filters/sort change
  useEffect(() => {
    setCurrentPage(1);
    setInfiniteScrollPage(1);
  }, [filters, sortOption]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (isLiveAPI()) {
      loadPaginatedPage(page);
    }
  };

  const handlePaginationModeChange = (newIsPagination: boolean) => {
    setIsPaginationMode(newIsPagination);
    setCurrentPage(1);
    setInfiniteScrollPage(1);
    if (isLiveAPI()) {
      if (newIsPagination) {
        loadPaginatedPage(1);
      } else {
        loadInfiniteInitial();
      }
    }
  };

  const handleLoadMore = () => {
    if (isLiveAPI()) {
      loadMoreInfinite();
    } else {
      setInfiniteScrollPage((prev) => prev + 1);
    }
  };

  const handleRetry = () => {
    if (!isLiveAPI()) {
      loadMockJobs();
      return;
    }
    if (isPaginationMode) {
      loadPaginatedPage(currentPage);
    } else {
      loadInfiniteInitial();
    }
  };

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
                      {isLiveAPI() && isPaginationMode
                        ? `${serverTotal.toLocaleString()} Jobs Available`
                        : `${filteredAndSortedJobs.length.toLocaleString()} Jobs Found`}
                    </h2>
                    <p className="text-sm text-[#64748b] mt-1">
                      {isLiveAPI() && isPaginationMode
                        ? `Page ${currentPage} of ${serverTotalPages}`
                        : "Showing the latest tech opportunities"}
                    </p>
                  </div>
                  <FigmaViewToggle
                    viewMode={viewMode}
                    onViewModeChange={setViewMode}
                    sortOption={sortOption}
                    onSortChange={setSortOption}
                    isPaginationMode={isPaginationMode}
                    onPaginationModeChange={handlePaginationModeChange}
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

                    {/* Pagination / Infinite Scroll */}
                    {isPaginationMode
                      ? totalPages > 1 && (
                          <div className="mt-8 flex items-center justify-center">
                            <PaginationControls
                              currentPage={currentPage}
                              totalPages={totalPages}
                              onPageChange={handlePageChange}
                            />
                          </div>
                        )
                      : (
                          <div className="mt-8">
                            <InfiniteScrollTrigger
                              onLoadMore={handleLoadMore}
                              hasMore={hasMoreInfiniteScroll}
                              isLoading={isLoadingMore}
                            />
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
                  <Button onClick={handleRetry} variant="outline">
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
          <p>&copy;</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
