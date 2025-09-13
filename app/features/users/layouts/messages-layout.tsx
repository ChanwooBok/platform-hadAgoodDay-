import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Outlet } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "~/common/components/ui/sidebar";

import { SidebarProvider } from "~/common/components/ui/sidebar";
import { MessageCard } from "../components/messages-card";

export default function MessagesLayout() {
  return (
    <SidebarProvider className="flex max-h-[calc(100vh-14rem)] overflow-hidden h-[calc(100vh-14rem)] min-h-full">
      <Sidebar className="pt-16" variant="floating">
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {Array.from({ length: 10 }).map((_, index) => (
                <MessageCard
                  key={index}
                  id={index.toString()}
                  avatarUrl="https://github.com/shadcn.png"
                  name="John Doe"
                  lastMessage="Last message"
                />
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <div className="h-full flex-1">
        <Outlet />
      </div>
    </SidebarProvider>
  );
}
