import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { FilterPanel } from "./FilterPanel";
import { Filter } from "lucide-react";
import { Filters } from "../../types/job";

interface MobileFilterDrawerProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  locations: string[];
  categories: string[];
  salaryRange: [number, number];
}

export function MobileFilterDrawer({
  filters,
  onFiltersChange,
  locations,
  categories,
  salaryRange,
}: MobileFilterDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="lg:hidden">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <div className="mt-4">
          <FilterPanel
            filters={filters}
            onFiltersChange={onFiltersChange}
            locations={locations}
            categories={categories}
            salaryRange={salaryRange}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}