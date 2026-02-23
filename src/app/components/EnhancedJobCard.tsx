import { Job } from "../../types/job";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  MapPin,
  Building2,
  DollarSign,
  Calendar,
  Briefcase,
  Heart,
  ArrowRight,
} from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";

interface EnhancedJobCardProps {
  job: Job;
}

export function EnhancedJobCard({ job }: EnhancedJobCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const qualifications = job.qualifications
    ? JSON.parse(job.qualifications)
    : [];

  // Extract company initials for logo placeholder
  const getCompanyInitials = (company: string) => {
    return company
      .split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  // Generate a consistent color based on company name
  const getCompanyColor = (company: string) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-cyan-500",
    ];
    const hash = company.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-200 border-border">
      <CardContent className="p-6">
        <div className="flex gap-4">
          {/* Company Logo */}
          <div className={`shrink-0 w-16 h-16 rounded-lg ${getCompanyColor(job.company)} flex items-center justify-center text-white text-xl font-bold`}>
            {getCompanyInitials(job.company)}
          </div>

          {/* Job Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-foreground mb-1 truncate">
                  {job.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {job.company} • {job.job_category}
                </p>
              </div>

              {/* Favorite Button */}
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                <Heart
                  className={`w-5 h-5 ${
                    isFavorite
                      ? "fill-red-500 text-red-500"
                      : "text-muted-foreground"
                  }`}
                />
              </button>
            </div>

            {/* Job Details Grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="truncate">{job.location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <DollarSign className="w-4 h-4 shrink-0" />
                <span className="truncate">
                  ${(job.salary_from / 1000).toFixed(0)}k - ${(job.salary_to / 1000).toFixed(0)}k
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Briefcase className="w-4 h-4 shrink-0" />
                <span className="truncate">{job.employment_type}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4 shrink-0" />
                <span className="truncate">
                  Ends: {job.application_deadline ? format(new Date(job.application_deadline), "MMM d, yyyy") : 'N/A'}
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {job.is_remote_work === 1 && (
                <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-300">
                  REMOTE
                </Badge>
              )}
              <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-300">
                {job.employment_type.toUpperCase().replace("-", " ")}
              </Badge>
              {job.job_category && (
                <Badge variant="outline">
                  {job.job_category.toUpperCase()}
                </Badge>
              )}
            </div>

            {/* Apply Button */}
            <div className="flex items-center justify-end">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Apply
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
