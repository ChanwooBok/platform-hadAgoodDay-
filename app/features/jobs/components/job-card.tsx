import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Badge } from "~/common/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { DateTime } from "luxon";

interface JobCardProps {
  id: number;
  title: string;
  company: string;
  companyLogoUrl: string;
  companyHq: string;
  postedAt: string;
  type: string;
  locationType: string;
  salary: string;
}

export function JobCard({
  id,
  title,
  company,
  companyLogoUrl,
  companyHq,
  postedAt,
  type,
  locationType,
  salary,
}: JobCardProps) {
  return (
    <Link to={`/jobs/${id}`}>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <img
              src={companyLogoUrl}
              alt={company}
              className="w-10 h-10 rounded-full"
            />
            <div className="space-x-2">
              <span>{company}</span>
              <span>{DateTime.fromISO(postedAt).toRelative()}</span>
            </div>
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Badge variant="outline" className="capitalize">
            {type}
          </Badge>
          <Badge variant="outline" className="capitalize">
            {locationType}
          </Badge>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">
              {salary}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {companyHq}
            </span>
          </div>
          <Button variant="secondary" size="sm">
            Apply now
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
