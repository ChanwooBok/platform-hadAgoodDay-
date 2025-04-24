import { ProductCard } from "~/features/products/components/product-card";
import { PostCard } from "~/features/community/components/post-card";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { JobCard } from "~/features/jobs/components/job-card";
import { TeamCard } from "~/features/teams/components/team-card";
import { Link, type MetaFunction } from "react-router";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ArrowRightIcon, DotIcon, EyeIcon, HeartIcon } from "lucide-react";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import { AvatarFallback } from "../components/ui/avatar";
import type { Route } from "./+types/home-page";

export function loader({ request }: Route.LoaderArgs) {
  console.log("hello");
  return {
    hello: "world",
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export function meta(): Route.MetaFunction {
  return [
    { title: "Home | Had A Good Day" },
    { name: "description", content: "Welcome to Had A Good Day" },
  ];
}

export default function HomePage() {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community today.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/products/leaderboards">Explore all products &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <ProductCard
            key={index}
            id={`productId-${index}`}
            title="Product Name"
            description="Product Description"
            commentCount={12}
            viewCount={12}
            upvoteCount={120}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Discussions
          </h2>
          <p className="text-xl font-light text-foreground">
            The latest discussions from our community.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/community">Explore all discussions &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <PostCard
            key={index}
            id={`postId-${index}`}
            title="What is the best productivity tool?"
            author="woo"
            authorAvatarUrl="https://github.com/apple.png"
            category="Productivity"
            postedAt="12 hours ago"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Ideas GPT
          </h2>
          <p className="text-xl font-light text-foreground">
            Find ideas for your next project.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/ideas">Explore all ideas &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <IdeaCard
            key={index}
            id="ideasId"
            title="A startup that crates an AI-powered productivity tool,delivering custom AI prompts to users tracking their productivity and providing insights on their progress."
            viewCount={123}
            postedAt="12 hours ago"
            likeCount={12}
            claimed={index % 2 === 0}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Jobs
          </h2>
          <p className="text-xl font-light text-foreground">
            Find jobs for your next life.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/jobs">Explore all jobs &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
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
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Find a team mate
          </h2>
          <p className="text-xl font-light text-foreground">
            Join a team to build something great.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/teams">Explore all teams &rarr;</Link>
          </Button>
        </div>
        <TeamCard
          id="teamId"
          leaderUsername="Em"
          leaderAvatarUrl="https://github.com/chanwooBok.png"
          positions={[
            "backend engineer",
            "full-stack engineer",
            "frontend engineer",
          ]}
          project="a startup"
        />
      </div>
    </div>
  );
}
