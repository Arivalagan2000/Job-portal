import { Filters } from "../../types/job";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Slider } from "./ui/slider";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { Bell } from "lucide-react";

interface FigmaFilterSidebarProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  locations: string[];
  categories: string[];
  employmentTypes: string[];
  salaryRange: [number, number];
}

export function FigmaFilterSidebar({
  filters,
  onFiltersChange,
  locations,
  categories,
  employmentTypes,
  salaryRange,
}: FigmaFilterSidebarProps) {
  const handleReset = () => {
    onFiltersChange({
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
  };

  // Use provided employment types or fallback to standard options
  const displayEmploymentTypes = employmentTypes.length > 0
    ? employmentTypes
    : ["Full-Time", "Part-Time", "Contract", "Internship"];

  const toggleEmploymentType = (type: string) => {
    const types = filters.employmentTypes.includes(type)
      ? filters.employmentTypes.filter((t) => t !== type)
      : [...filters.employmentTypes, type];
    onFiltersChange({ ...filters, employmentTypes: types });
  };

  const formatSalary = (value: number) => {
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}k`;
    }
    return `$${value}`;
  };

  const displaySalaryRange = `${formatSalary(filters.salaryMin)} - ${formatSalary(filters.salaryMax)}+`;

  return (
    <div className="space-y-6">
      {/* Filter Panel */}
      <div className="bg-white dark:bg-card rounded-xl border border-[#e2e8f0] dark:border-border shadow-sm">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[#0f172a] dark:text-foreground">
              Filters
            </h3>
            <button
              onClick={handleReset}
              className="text-xs font-medium text-[#24aceb] hover:text-[#1e9dd6]"
            >
              Reset All
            </button>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label className="text-xs font-semibold text-[#64748b] uppercase tracking-wider">
              Location
            </Label>
            <Select
              value={filters.location || "all-locations"}
              onValueChange={(value) =>
                onFiltersChange({ ...filters, location: value === "all-locations" ? "" : value })
              }
            >
              <SelectTrigger className="bg-[#f8fafc] border-[#e2e8f0] h-[38px] text-sm">
                <SelectValue placeholder="Remote (Worldwide)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-locations">All Locations</SelectItem>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Employment Type */}
          <div className="space-y-3">
            <Label className="text-xs font-semibold text-[#64748b] uppercase tracking-wider">
              Employment Type
            </Label>
            <div className="space-y-2">
              {displayEmploymentTypes.map((type) => {
                const isChecked = filters.employmentTypes.includes(type);
                return (
                  <div key={type} className="flex items-center gap-3">
                    <div
                      className={`relative w-[18px] h-[18px] rounded-[4px] cursor-pointer ${
                        isChecked
                          ? "bg-[#24aceb]"
                          : "bg-white border border-[#cbd5e1]"
                      }`}
                      onClick={() => toggleEmploymentType(type)}
                    >
                      {isChecked && (
                        <svg
                          className="absolute inset-0 w-full h-full p-[2px]"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M13.3334 4L6.00002 11.3333L2.66669 8"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <label
                      className="text-sm text-[#475569] dark:text-foreground cursor-pointer"
                      onClick={() => toggleEmploymentType(type)}
                    >
                      {type}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Job Category */}
          <div className="space-y-2">
            <Label className="text-xs font-semibold text-[#64748b] uppercase tracking-wider">
              Job Category
            </Label>
            <Select
              value={filters.jobCategory || "all-categories"}
              onValueChange={(value) =>
                onFiltersChange({ ...filters, jobCategory: value === "all-categories" ? "" : value })
              }
            >
              <SelectTrigger className="bg-[#f8fafc] border-[#e2e8f0] h-[38px] text-sm">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-categories">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Remote Only */}
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium text-[#334155] dark:text-foreground">
              Remote Only
            </Label>
            <Switch
              checked={filters.remoteOnly}
              onCheckedChange={(checked) =>
                onFiltersChange({ ...filters, remoteOnly: checked })
              }
              className="data-[state=checked]:bg-[#24aceb]"
            />
          </div>

          {/* Salary Range */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-xs font-semibold text-[#64748b] uppercase tracking-wider">
                Salary Range
              </Label>
              <span className="text-xs font-medium text-[#24aceb]">
                {displaySalaryRange}
              </span>
            </div>
            <div className="relative pt-2">
              <Slider
                min={salaryRange[0]}
                max={salaryRange[1]}
                step={1000}
                value={[filters.salaryMin, filters.salaryMax]}
                onValueChange={([min, max]) =>
                  onFiltersChange({ ...filters, salaryMin: min, salaryMax: max })
                }
                className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4 [&_[role=slider]]:border-2 [&_[role=slider]]:border-[#24aceb] [&_[role=slider]]:bg-white [&_.range]:bg-[#24aceb] [&_[role=slider]]:shadow-sm"
              />
            </div>
          </div>

          {/* Date Posted */}
          <div className="space-y-2">
            <Label className="text-xs font-semibold text-[#64748b] uppercase tracking-wider">
              Date Posted
            </Label>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  onFiltersChange({ ...filters, createdWithin: 7 })
                }
                className={`flex-1 px-4 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  filters.createdWithin === 7
                    ? "bg-[#24aceb] text-white border-[#24aceb]"
                    : "bg-[#f8fafc] text-[#64748b] border-[#cbd5e1] hover:border-[#24aceb]"
                }`}
              >
                Last 7d
              </button>
              <button
                onClick={() =>
                  onFiltersChange({ ...filters, createdWithin: 30 })
                }
                className={`flex-1 px-4 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  filters.createdWithin === 30
                    ? "bg-[#24aceb] text-white border-[#24aceb]"
                    : "bg-[#f8fafc] text-[#64748b] border-[#cbd5e1] hover:border-[#24aceb]"
                }`}
              >
                Last 30d
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pro Feature Card */}
      <div
        className="rounded-xl overflow-hidden relative"
        style={{
          background: "linear-gradient(143.13deg, #24aceb 0%, #2563eb 100%)",
        }}
      >
        <div className="p-6 relative">
          {/* Background Icon */}
          <div className="absolute bottom-0 right-0 transform translate-x-6 translate-y-6 rotate-12 opacity-10">
            <Bell className="w-20 h-20 text-white" />
          </div>

          <div className="relative z-10 space-y-2">
            <p className="text-xs font-bold text-white/80 uppercase tracking-wider">
              Pro Feature
            </p>
            <h3 className="text-lg font-bold text-white">Job Match Alerts</h3>
            <p className="text-sm text-white/90 leading-5">
              Get instant notifications for jobs matching your profile.
            </p>
            <Button className="w-full bg-white text-[#24aceb] hover:bg-white/90 font-bold mt-4 shadow-lg">
              Upgrade Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}