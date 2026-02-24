import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { DarkModeToggle } from "./DarkModeToggle";
import { Briefcase, Search } from "lucide-react";
import { useDebounce } from "../../hooks/useDebounce";
import { useEffect, useState } from "react";

interface FigmaHeaderProps {
  searchInput: string;
  onSearchChange: (value: string) => void;
  onExportCSV: () => void;
  onExportPDF: () => void;
}

export function FigmaHeader({
  searchInput,
  onSearchChange,
  onExportCSV,
  onExportPDF,
}: FigmaHeaderProps) {
  const [localSearch, setLocalSearch] = useState(searchInput);
  const debouncedSearch = useDebounce(localSearch, 500);

  // Update parent when debounced value changes
  useEffect(() => {
    onSearchChange(debouncedSearch);
  }, [debouncedSearch]);

  // Sync with external changes
  useEffect(() => {
    setLocalSearch(searchInput);
  }, [searchInput]);

  return (
    <header className="border-b border-[#e2e8f0] sticky top-0 bg-white dark:bg-background z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-[#24aceb] rounded-lg p-2">
              <Briefcase className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold text-[#0f172a] dark:text-foreground">
              Hirro
            </span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94a3b8]" />
              <Input
                placeholder="Search job titles, companies, or keywords..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="pl-10 bg-[#f8fafc] border-[#e2e8f0] text-[14px] h-10 dark:bg-input dark:border-border"
              />
              <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 hidden h-5 select-none items-center gap-1 rounded border border-[#e2e8f0] bg-white px-1.5 font-mono text-[10px] font-medium text-[#64748b] opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-2 ml-auto">
            <DarkModeToggle />
            <Button
              size="sm"
              className="hidden sm:flex bg-[#24aceb] hover:bg-[#1e9dd6] text-white h-9"
              onClick={onExportCSV}
            >
              CSV
            </Button>
            <Button
              size="sm"
              className="hidden sm:flex bg-[#24aceb] hover:bg-[#1e9dd6] text-white h-9"
              onClick={onExportPDF}
            >
              PDF
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94a3b8]" />
            <Input
              placeholder="Search jobs..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className="pl-10 bg-[#f8fafc] border-[#e2e8f0] text-[14px]"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
