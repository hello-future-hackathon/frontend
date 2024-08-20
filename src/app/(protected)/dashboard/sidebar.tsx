import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { ContactRound, LogOut } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Account from "./account";
import Provider from "@/app/providers";

const routes = [
  {
    name: "Contact",
    icon: <ContactRound />,
    href: "/dashboard/contact",
  },
];

export default function Sidebar() {
  return (
    <nav className="flex flex-col items-center px-2 py-4 border-r border-slate-700 min-h-full">
      <h1 className="flex items-center">
        <Link href="/dashboard/contact">
          <Image src="/logo.svg" alt="Telepathy" width={24} height={24} />
        </Link>
      </h1>
      <Separator className="bg-slate-600 my-4" />
      {routes.map((route, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={route.href}
                className="p-2 rounded-lg max-w-fit text-white hover:bg-macchiato-blue hover:text-slate-800"
              >
                {route.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className="bg-slate-900 border-slate-600 text-white"
              side="right"
            >
              <p>{route.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
      <Provider>
        <Account />
      </Provider>
    </nav>
  );
}
