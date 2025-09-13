import { Link } from "react-router";
import type { Route } from "./+types/login-page";
import { Button } from "~/common/components/ui/button";
import InputPair from "~/common/components/input-pair";
import { Form } from "react-router";
import AuthButtons from "../components/auth-buttons";
export const meta: Route.MetaFunction = () => [
  { title: "Login" },
  { name: "description", content: "Login to your account" },
];

export default function LoginPage() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full">
      <Button variant={"ghost"} asChild className="absolute top-8 right-8">
        <Link to="/auth/join">Don't have an account? Join</Link>
      </Button>
      <div className="flex items-center flex-col justify-center w-full max-w-md gap-10">
        <h1 className="text-2xl font-semibold">Login to your account</h1>
        <Form className="w-full space-y-4">
          <InputPair
            id="email"
            label="Email"
            description="Enter your email address"
            name="email"
            required
            type="email"
            placeholder="i.e wemake@example.com"
          />
          <InputPair
            id="password"
            label="Password"
            description="Enter your password"
            name="password"
            required
            type="password"
            placeholder="Enter your password"
          />
          <Button className="w-full" type="submit">
            Login
          </Button>
        </Form>
        <AuthButtons />
      </div>
    </div>
  );
}
