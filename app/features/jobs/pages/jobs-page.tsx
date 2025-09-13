import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/jobs-page";
import { JobCard } from "../components/job-card";
import { Button } from "~/common/components/ui/button";
import { JOB_TYPES, LOCATION_TYPES, SALARY_RANGE } from "../constants";
import { Link, useSearchParams } from "react-router";
import { cn } from "~/lib/utils";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Jobs | Had A Good Day" },
    { name: "description", content: "Browse available jobs" },
  ];
};

export default function JobsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickFilter = (key: string, value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  };
  // onClickFilter 함수는 일반적으로 사용자가 필터를 선택할 때 URL의 쿼리 파라미터를 업데이트하는 역할

  return (
    <div className="space-y-20">
      <Hero title="Jobs" description="Browse available jobs" />
      <div className="grid grid-cols-1 xl:grid-cols-6 gap-20 items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:col-span-4 gap-5">
          {Array.from({ length: 20 }).map((_, index) => (
            <JobCard
              key={index}
              id="id"
              title="Software Engineer"
              company="Tesla"
              companyLogoUrl="https://github.com/teslamotors.png"
              companyHq="Palo Alto, CA"
              postedAt="12 hours ago"
              type="Full-time"
              positionLocation="remote"
              salary="$100,000 - $120,000"
              locationType="Remote"
            />
          ))}
        </div>

        <div className="xl:col-span-2 sticky top-20 flex flex-col gap-10">
          <div className="flex flex-col items-start gap-2.5">
            <h4 className="text-sm text-muted-foreground font-bold">Type</h4>
            <div className="flex flex-wrap gap-2.5">
              {JOB_TYPES.map((type) => (
                <Button
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

            <h4 className="text-sm text-muted-foreground font-bold">
              Location
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {LOCATION_TYPES.map((type) => (
                <Button
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

            <h4 className="text-sm text-muted-foreground font-bold">
              Salary range
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {SALARY_RANGE.map((range) => (
                <Button
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
        </div>
      </div>
    </div>
  );
}
