import { SortOption } from "../../types/job";
import { Grid3x3, List, Layers } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface FigmaViewToggleProps {
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
  isPaginationMode: boolean;
  onPaginationModeChange: (isPagination: boolean) => void;
}

export function FigmaViewToggle({
  viewMode,
  onViewModeChange,
  sortOption,
  onSortChange,
  isPaginationMode,
  onPaginationModeChange,
}: FigmaViewToggleProps) {
  return (
    <div className="flex items-center gap-3">
      {/* Grid/List Toggle */}
      <div className="bg-white border border-[#e2e8f0] rounded-lg p-1 flex gap-2">
        <button
          onClick={() => onViewModeChange("grid")}
          className={`p-1.5 rounded ${
            viewMode === "grid"
              ? "bg-[#f1f5f9]"
              : "hover:bg-[#f8fafc]"
          } transition-colors`}
          aria-label="Grid view"
        >
          <Grid3x3
            className={`w-3.5 h-3.5 ${
              viewMode === "grid" ? "text-[#24aceb]" : "text-[#94a3b8]"
            }`}
          />
        </button>
        <button
          onClick={() => onViewModeChange("list")}
          className={`p-1.5 rounded ${
            viewMode === "list"
              ? "bg-[#f1f5f9]"
              : "hover:bg-[#f8fafc]"
          } transition-colors`}
          aria-label="List view"
        >
          <List
            className={`w-3.5 h-3.5 ${
              viewMode === "list" ? "text-[#24aceb]" : "text-[#94a3b8]"
            }`}
          />
        </button>
      </div>

      {/* Sort Dropdown */}
      <Select
        value={sortOption}
        onValueChange={(value) => onSortChange(value as SortOption)}
      >
        <SelectTrigger className="w-[183px] h-[38px] bg-white border-[#e2e8f0] text-sm">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Newest first</SelectItem>
          <SelectItem value="oldest">Oldest first</SelectItem>
          <SelectItem value="salary-high">Salary: High to Low</SelectItem>
          <SelectItem value="salary-low">Salary: Low to High</SelectItem>
          <SelectItem value="most-openings">Most Openings</SelectItem>
          <SelectItem value="title-asc">Title: A to Z</SelectItem>
          <SelectItem value="title-desc">Title: Z to A</SelectItem>
        </SelectContent>
      </Select>

      {/* Pagination Toggle Button */}
      <button
        onClick={() => onPaginationModeChange(!isPaginationMode)}
        className={`h-[38px] px-4 rounded-lg border transition-all flex items-center gap-2 text-sm font-medium ${
          isPaginationMode
            ? "bg-[#24aceb] border-[#24aceb] text-white"
            : "bg-white border-[#e2e8f0] text-[#64748b] hover:border-[#24aceb] hover:text-[#24aceb]"
        }`}
      >
        <Layers className="w-4 h-4" />
        Pagination
      </button>
    </div>
  );
}
