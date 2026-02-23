import { SortOption } from "../../types/job";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";

interface SortControlProps {
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
}

export function SortControl({ sortOption, onSortChange }: SortControlProps) {
  return (
    <div className="flex items-center gap-2">
      <Label htmlFor="sort" className="whitespace-nowrap">
        Sort by:
      </Label>
      <Select
        value={sortOption}
        onValueChange={(value) => onSortChange(value as SortOption)}
      >
        <SelectTrigger id="sort" className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Newest First</SelectItem>
          <SelectItem value="oldest">Oldest First</SelectItem>
          <SelectItem value="salary-high">Salary: High to Low</SelectItem>
          <SelectItem value="salary-low">Salary: Low to High</SelectItem>
          <SelectItem value="most-openings">Most Openings</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}