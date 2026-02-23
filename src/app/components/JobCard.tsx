import { Job } from "../../types/job";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  MapPin,
  Building2,
  DollarSign,
  Calendar,
  Briefcase,
  Users,
} from "lucide-react";
import { format } from "date-fns";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  const qualifications = job.qualifications
    ? JSON.parse(job.qualifications)
    : [];

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building2 className="h-4 w-4" />
              <span>{job.company}</span>
            </div>
          </div>
          {job.is_remote_work === 1 && (
            <Badge variant="secondary">Remote</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {job.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <span>
              ${job.salary_from?.toLocaleString() || "0"} - $
              {job.salary_to?.toLocaleString() || "0"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-muted-foreground" />
            <span>{job.employment_type}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>
              Deadline: {job.application_deadline ? format(new Date(job.application_deadline), "MMM d, yyyy") : "N/A"}
            </span>
          </div>
          {job.openings && job.openings > 0 && (
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>{job.openings} openings</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">{job.job_category}</Badge>
          <Badge variant="outline">{job.employment_type}</Badge>
        </div>

        {qualifications.length > 0 && (
          <div>
            <p className="text-sm mb-2">Qualifications:</p>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              {qualifications.slice(0, 3).map((qual: string, idx: number) => (
                <li key={`qual-${idx}`} className="line-clamp-1">
                  {qual}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="pt-2 border-t">
          <p className="text-xs text-muted-foreground">
            Contact: {job.contact}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}