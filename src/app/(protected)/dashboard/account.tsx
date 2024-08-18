"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";

export default function Account() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="mt-auto">
        <Avatar>
          <AvatarImage src="/avatar.jpg" alt="Avatar" />
          <AvatarFallback className="bg-slate-600 text-white">U</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="right"
        className="bg-slate-900 text-white border-slate-600 ml-2"
      >
        <DropdownMenuItem className="focus:bg-slate-700 focus:text-white">
          <LogOut size={16} />
          <span className="ml-2">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
