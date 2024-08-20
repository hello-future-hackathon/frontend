"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { ClipboardCopy, LogOut, UserRoundPen } from "lucide-react";
import { useConnectors } from "wagmi";
import { useAccount } from "wagmi";
import { useBalance } from "wagmi";
import { useRouter } from "next/navigation";
import { hederaTestnet } from "viem/chains";

export default function Account() {
  const connectors = useConnectors();
  const router = useRouter();
  const { address } = useAccount();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="mt-auto">
        <Avatar>
          <AvatarImage src="/metamask.svg" />
          <AvatarFallback>N</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="right"
        className="ml-2 bg-slate-900 text-white border-slate-700"
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <DropdownMenuLabel className="w-[15ch] overflow-hidden whitespace-nowrap text-ellipsis">
                <span>{address}</span>
              </DropdownMenuLabel>
            </TooltipTrigger>
            <TooltipContent className="bg-slate-900 text-white border-slate-700">
              {address}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DropdownMenuSeparator className="bg-slate-700" />
        <DropdownMenuGroup>
          <DropdownMenuItem className="focus:bg-slate-800 focus:text-white space-x-4 py-2">
            <UserRoundPen />
            <span>Edit Profile</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-slate-700" />
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="focus:bg-slate-800 focus:text-white space-x-4"
            onClick={async () => {
              await connectors[0].disconnect();
              router.push("/");
            }}
          >
            <LogOut />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
