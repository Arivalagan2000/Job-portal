import { Filters } from "../../types/job";
import { Badge } from "./ui/badge";
import { X } from "lucide-react";
import { Button } from "./ui/button";

interface FilterSummaryProps {
  filters: Filters;
  onRemoveFilter: (filterKey: keyof Filters, value?: string) => void;
  onClearAll: () => void;
}

export function FilterSummary({
  filters,
  onRemoveFilter,
  onClearAll,
}: FilterSummaryProps) {
  const activeFilters: Array<{
    key: keyof Filters;
    label: string;
    value?: string;
  }> = [];

  if (filters.search) {
    activeFilters.push({
      key: "search",
      label: `Search: "${filters.search}"`,
    });
  }

  if (filters.location) {
    activeFilters.push({
      key: "location",
      label: `Location: ${filters.location}`,
    });
  }

  filters.employmentTypes.forEach((type) => {
    activeFilters.push({
      key: "employmentTypes",
      label: `Type: ${type}`,
      value: type,
    });
  });

  if (filters.jobCategory) {
    activeFilters.push({
      key: "jobCategory",
      label: `Category: ${filters.jobCategory}`,
    });
  }

  if (filters.remoteOnly) {
    activeFilters.push({
      key: "remoteOnly",
      label: "Remote Only",
    });
  }

  if (filters.salaryMin > 0 || filters.salaryMax < 200000) {
    activeFilters.push({
      key: "salaryMin",
      label: `Salary: $${filters.salaryMin.toLocaleString()} - $${filters.salaryMax.toLocaleString()}`,
    });
  }

  if (filters.minOpenings > 0) {
    activeFilters.push({
      key: "minOpenings",
      label: `Min Openings: ${filters.minOpenings}`,
    });
  }

  if (filters.createdWithin) {
    activeFilters.push({
      key: "createdWithin",
      label: `Created: Last ${filters.createdWithin} days`,
    });
  }

  if (activeFilters.length === 0) return null;

  return (
    <div className="bg-muted/50 rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm">Active Filters</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearAll}
          className="h-auto py-1"
        >
          Clear All
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {activeFilters.map((filter, idx) => (
          <Badge
            key={`${filter.key}-${idx}`}
            variant="secondary"
            className="gap-1"
          >
            {filter.label}
            <button
              onClick={() => onRemoveFilter(filter.key, filter.value)}
              className="ml-1 hover:bg-background/20 rounded-full p-0.5"
            >
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}
      </div>
    </div>
  );
}