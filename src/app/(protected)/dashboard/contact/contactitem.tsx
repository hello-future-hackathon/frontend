"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuContent,
} from "@/components/ui/context-menu";
import { Separator } from "@/components/ui/separator";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ContactItem({
  profileUrl,
  nickname,
}: {
  profileUrl: string;
  nickname: string;
}) {
  const router = useRouter();
  return (
    <ContextMenu>
      <ContextMenuTrigger
        className="flex space-x-3 items-center my-1 p-1 rounded hover:bg-slate-700 cursor-pointer"
        onClick={() => {}}
      >
        <Avatar className="w-8 h-8">
          <AvatarImage src={profileUrl} />
          <AvatarFallback className="bg-slate-600 text-white">
            {nickname.length > 0 ? nickname[0].toUpperCase() : "?"}
          </AvatarFallback>
        </Avatar>
        <span className="text-macchiato-gray-200 overflow-hidden text-ellipsis">
          {nickname}
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent className="bg-slate-900 border-slate-700 text-white">
        <ContextMenuItem className="focus:bg-slate-700 focus:text-white p-2">
          <Trash2 className="text-macchiato-red" />
          <span className="ml-2">Delete Contact</span>
        </ContextMenuItem>
        <Separator className="bg-slate-700" />
        <ContextMenuItem className="focus:bg-slate-700 focus:text-white p-2">
          <Trash2 className="text-macchiato-red" />
          <span className="ml-2">Delete Contact</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
