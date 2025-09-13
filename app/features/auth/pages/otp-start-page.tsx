import type { Route } from "./+types/otp-start-page";
import { Button } from "~/common/components/ui/button";
import InputPair from "~/common/components/input-pair";
import { Form, Link } from "react-router";

export const meta: Route.MetaFunction = () => [
  { title: "OTP Verification" },
  { name: "description", content: "Start OTP verification process" },
];

export default function OtpStartPage() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full">
      <div className="flex items-center flex-col justify-center w-full max-w-md gap-10">
        <h1 className="text-2xl font-semibold">Login with OTP</h1>
        <p className="text-sm text-muted-foreground">
          we will send a code to your email to verify your account.
        </p>
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
          <Button className="w-full" type="submit">
            Send OTP
          </Button>
        </Form>
      </div>
    </div>
  );
}
