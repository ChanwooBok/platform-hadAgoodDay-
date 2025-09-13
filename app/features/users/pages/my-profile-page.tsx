import type { Route } from "./+types/my-profile-page";
import { Hero } from "~/common/components/hero";
import { Button } from "~/common/components/ui/button";
import { Form, redirect } from "react-router";
import InputPair from "~/common/components/input-pair";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";

export function loader() {
  // bring info from cookie
  return redirect("/user/woo");
}

export default function MyProfilePage() {
  return (
    <div className="space-y-10">
      <Hero title="My Profile" description="Manage your profile" />
    </div>
  );
}
