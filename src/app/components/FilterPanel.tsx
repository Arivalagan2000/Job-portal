import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Switch } from "./ui/switch";
import { Slider } from "./ui/slider";
import { Filters } from "../../types/job";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Search } from "lucide-react";

interface FilterPanelProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  locations: string[];
  categories: string[];
  salaryRange: [number, number];
}

const EMPLOYMENT_TYPES = ["Full-Time", "Part-Time", "Contract", "Internship"];

export function FilterPanel({
  filters,
  onFiltersChange,
  locations,
  categories,
  salaryRange,
}: FilterPanelProps) {
  const [localSearch, setLocalSearch] = useState(filters.search);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      onFiltersChange({ ...filters, search: localSearch });
    }, 500);

    return () => clearTimeout(timer);
  }, [localSearch]);

  const handleEmploymentTypeChange = (type: string, checked: boolean) => {
    const updated = checked
      ? [...filters.employmentTypes, type]
      : filters.employmentTypes.filter((t) => t !== type);
    onFiltersChange({ ...filters, employmentTypes: updated });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search */}
        <div className="space-y-2">
          <Label htmlFor="search">Search</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="Search jobs..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Select
            value={filters.location}
            onValueChange={(value) =>
              onFiltersChange({
                ...filters,
                location: value === "all" ? "" : value,
              })
            }
          >
            <SelectTrigger id="location">
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              {locations.map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Employment Type */}
        <div className="space-y-3">
          <Label>Employment Type</Label>
          {EMPLOYMENT_TYPES.map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox
                id={`emp-${type}`}
                checked={filters.employmentTypes.includes(type)}
                onCheckedChange={(checked) =>
                  handleEmploymentTypeChange(type, checked as boolean)
                }
              />
              <Label
                htmlFor={`emp-${type}`}
                className="text-sm font-normal cursor-pointer"
              >
                {type}
              </Label>
            </div>
          ))}
        </div>

        {/* Job Category */}
        <div className="space-y-2">
          <Label htmlFor="category">Job Category</Label>
          <Select
            value={filters.jobCategory}
            onValueChange={(value) =>
              onFiltersChange({
                ...filters,
                jobCategory: value === "all" ? "" : value,
              })
            }
          >
            <SelectTrigger id="category">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Remote Only */}
        <div className="flex items-center justify-between">
          <Label htmlFor="remote">Remote Only</Label>
          <Switch
            id="remote"
            checked={filters.remoteOnly}
            onCheckedChange={(checked) =>
              onFiltersChange({ ...filters, remoteOnly: checked })
            }
          />
        </div>

        {/* Salary Range */}
        <div className="space-y-3">
          <Label>
            Salary Range: ${filters.salaryMin.toLocaleString()} - $
            {filters.salaryMax.toLocaleString()}
          </Label>
          <Slider
            min={salaryRange[0]}
            max={salaryRange[1]}
            step={1000}
            value={[filters.salaryMin, filters.salaryMax]}
            onValueChange={([min, max]) =>
              onFiltersChange({ ...filters, salaryMin: min, salaryMax: max })
            }
          />
        </div>

        {/* Minimum Openings */}
        <div className="space-y-2">
          <Label htmlFor="openings">Minimum Openings</Label>
          <Input
            id="openings"
            type="number"
            min="0"
            value={filters.minOpenings}
            onChange={(e) =>
              onFiltersChange({
                ...filters,
                minOpenings: parseInt(e.target.value) || 0,
              })
            }
          />
        </div>

        {/* Created Within */}
        <div className="space-y-2">
          <Label htmlFor="created">Created Within</Label>
          <Select
            value={filters.createdWithin?.toString() || "all"}
            onValueChange={(value) =>
              onFiltersChange({
                ...filters,
                createdWithin: value === "all" ? null : parseInt(value),
              })
            }
          >
            <SelectTrigger id="created">
              <SelectValue placeholder="All Time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="7">Last 7 Days</SelectItem>
              <SelectItem value="30">Last 30 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}