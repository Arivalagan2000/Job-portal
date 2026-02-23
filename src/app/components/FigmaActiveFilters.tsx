import { Filters } from "../../types/job";
import { X } from "lucide-react";

interface FigmaActiveFiltersProps {
  filters: Filters;
  onRemoveFilter: (key: keyof Filters, value?: string) => void;
  onClearAll: () => void;
}

export function FigmaActiveFilters({
  filters,
  onRemoveFilter,
  onClearAll,
}: FigmaActiveFiltersProps) {
  const activeFilters: Array<{ key: keyof Filters; label: string; value?: string }> = [];

  // Employment types
  filters.employmentTypes.forEach((type) => {
    activeFilters.push({
      key: "employmentTypes",
      label: type,
      value: type,
    });
  });

  // Created within
  if (filters.createdWithin) {
    activeFilters.push({
      key: "createdWithin",
      label: `Last ${filters.createdWithin} Days`,
    });
  }

  // Remote only
  if (filters.remoteOnly) {
    activeFilters.push({
      key: "remoteOnly",
      label: "Remote Only",
    });
  }

  // Location
  if (filters.location) {
    activeFilters.push({
      key: "location",
      label: filters.location,
    });
  }

  // Job category
  if (filters.jobCategory) {
    activeFilters.push({
      key: "jobCategory",
      label: filters.jobCategory,
    });
  }

  if (activeFilters.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs font-medium text-[#94a3b8] uppercase tracking-wider pr-2">
        Active:
      </span>
      {activeFilters.map((filter, index) => (
        <button
          key={`${filter.key}-${filter.value || ""}-${index}`}
          onClick={() => onRemoveFilter(filter.key, filter.value)}
          className="bg-[rgba(36,172,235,0.1)] border border-[rgba(36,172,235,0.2)] text-[#24aceb] text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1.5 hover:bg-[rgba(36,172,235,0.15)] transition-colors"
        >
          {filter.label}
          <X className="w-2 h-2" />
        </button>
      ))}
      <button
        onClick={onClearAll}
        className="text-xs font-medium text-[#94a3b8] hover:text-[#64748b] transition-colors pl-2"
      >
        Clear all
      </button>
    </div>
  );
}
