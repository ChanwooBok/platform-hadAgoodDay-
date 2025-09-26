import { Link } from "react-router";
import { Separator } from "./ui/separator";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "~/lib/utils";
import {
  BarChart3Icon,
  BellIcon,
  LogOut,
  MessageCircleIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from "./ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
const menus = [
  {
    name: "Products",
    to: "/products",
    items: [
      {
        name: "Leaderboards",
        description: "see the top performance in your community",
        to: "/products/leaderboards",
      },
      {
        name: "Categories",
        description: "see the top categories in your community",
        to: "/products/categories",
      },
      {
        name: "Search",
        description: "search for a product in your community",
        to: "/products/search",
      },
      {
        name: "Submit",
        description: "submit a product to our community",
        to: "/products/submit",
      },
      {
        name: "Promote",
        description: "promote a product to our community",
        to: "/products/promote",
      },
    ],
  },
  {
    name: "Jobs",
    to: "/jobs",
    items: [
      {
        name: "Remote jobs",
        description: "find remote jobs in your community",
        to: "/jobs?location=remote",
      },
      {
        name: "Full time jobs",
        description: "find full time jobs in your community",
        to: "/jobs?type=full-time",
      },
      {
        name: "freelance jobs",
        description: "find freelance jobs in your community",
        to: "/jobs?type=freelance",
      },
      {
        name: "Post a job",
        description: "Post a job to our community",
        to: "/jobs/submit",
      },
    ],
  },
  {
    name: "Community",
    to: "/community",
    items: [
      {
        name: "All Posts",
        description: "See all posts in our community",
        to: "/community",
      },
      {
        name: "Top Posts",
        description: "See the top posts in our community",
        to: "/community?sort=top",
      },
      {
        name: "New Posts",
        description: "See the new posts in our community",
        to: "/community?sort=new",
      },
      {
        name: "Create a Post",
        description: "Create a post in our community",
        to: "/community/create",
      },
    ],
  },
  {
    name: "IdeasGPT",
    to: "/ideas",
  },
  {
    name: "Teams",
    to: "/teams",
    items: [
      {
        name: "All Teams",
        description: "See all teams in our community",
        to: "/teams",
      },
      {
        name: "Create a Team",
        description: "Create a team in our community",
        to: "/teams/create",
      },
    ],
  },
];

export default function Navigation({
  isloggedIn,
  hasNotifications,
  hasMessages,
}: {
  isloggedIn: boolean;
  hasNotifications: boolean;
  hasMessages: boolean;
}) {
  return (
    <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
      <div className="flex items-center">
        <Link to="/" className="font-bold tracking-tighter text-lg">
          welcome to had a good day
        </Link>
        <Separator orientation="vertical" className="h-6 mx-4" />
        <NavigationMenu>
          <NavigationMenuList>
            {menus.map((menu) => (
              <NavigationMenuItem key={menu.name}>
                {menu.items ? (
                  <>
                    <Link to={menu.to} prefetch="render">
                      <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent>
                      <ul className="grid w-[600px] font-light gap-3 p-4 grid-cols-2">
                        {menu.items?.map((item) => (
                          <NavigationMenuItem
                            key={item.name}
                            className={cn([
                              "select-none rounded-md transition-colors focus:bg-accent  hover:bg-accent",
                              item.to === "/products/promote" &&
                                "col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
                              item.to === "/jobs/submit" &&
                                "col-span-2 bg-green-500/10 hover:bg-green-500/20 focus:bg-green-500/20",
                            ])}
                          >
                            <NavigationMenuLink asChild>
                              <Link
                                className="p-3 space-y-1 block leading-none no-underline outline-none"
                                to={item.to}
                              >
                                <span className="text-sm font-medium leading-none">
                                  {item.name}
                                </span>
                                <p className="text-sm text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link className={navigationMenuTriggerStyle()} to={menu.to}>
                    {menu.name}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {isloggedIn ? (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild className="relative">
            <Link to="/my/notifications">
              <BellIcon className="size-4" />
              {hasNotifications && (
                <span className="absolute top-1.5 right-1.5 bg-red-500 text-white rounded-full text-xs w-2 h-2"></span>
              )}
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="relative">
            <Link to="/my/messages">
              <MessageCircleIcon className="size-4" />
              {hasMessages && (
                <span className="absolute top-1.5 right-1.5 bg-red-500 text-white rounded-full text-xs w-2 h-2"></span>
              )}
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src="https://github.com/chanwoobok.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel className="flex flex-col">
                <span className="font-normal">Chanwoo</span>
                <span className="text-xs text-muted-foreground">@username</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/my/dashboard">
                    <BarChart3Icon className="size-4 mr-2" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/users/mr.2cbb4504">
                    <UserIcon className="size-4 mr-2" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/my/settings">
                    <SettingsIcon className="size-4 mr-2" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/auth/logout">
                    <LogOut className="size-4 mr-2" />
                    Logout
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link to="/auth/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/auth/join">join</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
