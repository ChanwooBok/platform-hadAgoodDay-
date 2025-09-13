import { Form } from "react-router";
import type { Route } from "./+types/otp-complete-page";
import { Button } from "~/common/components/ui/button";
import InputPair from "~/common/components/input-pair";

export const meta: Route.MetaFunction = () => [
  { title: "Complete OTP Verification" },
  { name: "description", content: "Complete OTP verification process" },
];

export default function OtpCompletePage() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full">
      <div className="flex items-center flex-col justify-center w-full max-w-md gap-10">
        <h1 className="text-2xl font-semibold">Confirm OTP</h1>
        <p className="text-sm text-muted-foreground">
          Type the code we sent to your email
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
          <InputPair
            id="otp"
            label="OTP"
            description="Enter the code we sent to your email"
            name="otp"
            required
            type="number"
            placeholder="i.e 123456"
          />
          <Button className="w-full" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
