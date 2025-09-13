import type { Route } from "~/types";

export function meta(): Route.MetaFunction {
  return [
    { title: "Social Authentication" },
    { name: "description", content: "Start social authentication process" },
  ];
}

export default function SocialStartPage() {
  return (
    <div className="flex flex-col space-y-2 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">
        Social Authentication
      </h1>
      <p className="text-sm text-muted-foreground">
        Redirecting to social provider...
      </p>
    </div>
  );
}
