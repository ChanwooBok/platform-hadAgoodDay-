import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/jobs-page";
import { JobCard } from "../components/job-card";
import { Button } from "~/common/components/ui/button";
import { JOB_TYPES, LOCATION_TYPES, SALARY_RANGE } from "../constants";
import { data, Link, useSearchParams } from "react-router";
import { cn } from "~/lib/utils";
import { getJobs } from "../queries";
import { z } from "zod";

const paramsSchema = z.object({
  location: z.string().optional(),
  type: z.string().optional(),
  salary: z.string().optional(),
});

export const loader = async ({ request }: Route.LoaderArgs) => {
  const url = new URL(request.url);
  const { success, data: parsedData } = paramsSchema.safeParse(
    Object.fromEntries(url.searchParams)
  );
  if (!success) {
    throw data({ error_code: "Invalid search params" });
  }
  const jobs = await getJobs({
    limit: 11,
    location: parsedData.location,
    type: parsedData.type,
    salary: parsedData.salary,
  });
  return { jobs };
};

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Jobs | Had A Good Day" },
    { name: "description", content: "Browse available jobs" },
  ];
};

export default function JobsPage({ loaderData }: Route.ComponentProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickFilter = (key: string, value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  };

  const clearFilter = (key: string) => {
    searchParams.delete(key);
    setSearchParams(searchParams);
  };

  const clearAllFilters = () => {
    searchParams.delete("type");
    searchParams.delete("location");
    searchParams.delete("salary");
    setSearchParams(searchParams);
  };

  return (
    <div className="space-y-20">
      <Hero title="Jobs" description="Browse available jobs" />
      <div className="grid grid-cols-1 xl:grid-cols-6 gap-20 items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:col-span-4 gap-5">
          {loaderData.jobs.map((job) => (
            <JobCard
              key={job.job_id}
              id={job.job_id}
              company={job.company_name}
              companyLogoUrl={job.company_logo}
              companyHq={job.company_location}
              title={job.position}
              postedAt={job.created_at}
              type={job.job_type}
              salary={job.salary_range}
              locationType={job.location_type}
            />
          ))}
        </div>

        <div className="xl:col-span-2 sticky top-20 flex flex-col gap-10">
          <div className="flex flex-col items-start gap-2.5">
            <div className="flex items-center justify-between w-full">
              <h4 className="text-sm text-muted-foreground font-bold">Type</h4>
              {searchParams.get("type") && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => clearFilter("type")}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear
                </Button>
              )}
            </div>
            <div className="flex flex-wrap gap-2.5">
              {JOB_TYPES.map((type) => (
                <Button
                  key={type.value}
                  variant="outline"
                  onClick={() => onClickFilter("type", type.value)}
                  className={cn(
                    searchParams.get("type") === type.value && "bg-accent"
                  )}
                >
                  {type.label}
                </Button>
              ))}
            </div>

            <div className="flex items-center justify-between w-full">
              <h4 className="text-sm text-muted-foreground font-bold">
                Location
              </h4>
              {searchParams.get("location") && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => clearFilter("location")}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear
                </Button>
              )}
            </div>
            <div className="flex flex-wrap gap-2.5">
              {LOCATION_TYPES.map((type) => (
                <Button
                  key={type.value}
                  variant="outline"
                  onClick={() => onClickFilter("location", type.value)}
                  className={cn(
                    searchParams.get("location") === type.value && "bg-accent"
                  )}
                >
                  {type.label}
                </Button>
              ))}
            </div>

            <div className="flex items-center justify-between w-full">
              <h4 className="text-sm text-muted-foreground font-bold">
                Salary range
              </h4>
              {searchParams.get("salary") && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => clearFilter("salary")}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear
                </Button>
              )}
            </div>
            <div className="flex flex-wrap gap-2.5">
              {SALARY_RANGE.map((range) => (
                <Button
                  key={range}
                  variant="outline"
                  onClick={() => onClickFilter("salary", range)}
                  className={cn(
                    searchParams.get("salary") === range && "bg-accent"
                  )}
                >
                  {range}
                </Button>
              ))}
            </div>
          </div>

          {(searchParams.get("type") ||
            searchParams.get("location") ||
            searchParams.get("salary")) && (
            <div className="pt-4 border-t">
              <Button
                variant="outline"
                onClick={clearAllFilters}
                className="w-full"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
