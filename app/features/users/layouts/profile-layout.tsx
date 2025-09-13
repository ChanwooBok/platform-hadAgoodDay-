import { Form, NavLink, Outlet } from "react-router";
import type { Route } from "../pages/+types/profile-page";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Button, buttonVariants } from "~/common/components/ui/button";
import { Link } from "react-router";
import {
  Dialog,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "~/common/components/ui/dialog";
import { Badge } from "~/common/components/ui/badge";
import { DialogHeader, DialogContent } from "~/common/components/ui/dialog";
import { Textarea } from "~/common/components/ui/textarea";
import { cn } from "~/lib/utils";
export const meta: Route.MetaFunction = () => [
  { title: "User Profile" },
  { name: "description", content: "View user profile" },
];

export default function ProfileLayout() {
  return (
    <div className="space-y-20">
      <div className="flex items-center gap-4">
        <Avatar className="size-40">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="space-y-5">
          <div className="flex gap-2">
            <h1>John Doe</h1>
            <Button variant="outline" asChild>
              <Link to="/my/settings">Edit Profile</Link>
            </Button>
            <Button variant="outline">Follow</Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Messages</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Messages</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                  <span className="text-sm text-muted-foreground">
                    send a message to John Doe
                  </span>

                  <Form>
                    <Textarea
                      placeholder="Type your message here."
                      className="resize-none"
                      rows={3}
                    />
                    <Button type="submit">Send</Button>
                  </Form>
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">@John doe</span>
            <Badge variant="secondary">Product Designer</Badge>
            <Badge variant="secondary">100 followers</Badge>
            <Badge variant="secondary">100 following</Badge>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        {[
          { label: "About", to: "/users/username" },
          { label: "Products", to: "/users/username/products" },
          { label: "Posts", to: "/users/username/posts" },
        ].map((item) => (
          <NavLink
            end
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              cn(
                buttonVariants({ variant: "outline" }),
                isActive && "bg-accent text-foreground"
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
