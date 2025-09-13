import type { Route } from "~/types";

export function meta(): Route.MetaFunction {
  return [
    { title: "Complete Social Authentication" },
    { name: "description", content: "Complete social authentication process" },
  ];
}

export default function SocialCompletePage() {
  return (
    <div className="flex flex-col space-y-2 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">
        Completing Authentication
      </h1>
      <p className="text-sm text-muted-foreground">
        Please wait while we complete your authentication...
      </p>
    </div>
  );
}
