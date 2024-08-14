"use client";

import { Button } from "../ui/button";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { hederaTestnet } from "viem/chains";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { CircleUserRound, LogOut, User, Wallet } from "lucide-react";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { Separator } from "../ui/separator";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Input } from "../ui/input";

export default function Header() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <header className="flex justify-between items-center px-8 py-4 border border-gray-200 shadow-sm">
      <h1 className="font-bold text-xl">
        <Link href="/">DataShore</Link>
      </h1>

      {account.status === "connected" ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="" />
              <AvatarFallback>
                <CircleUserRound size={24} className="text-slate-700" />
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-4">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href="/profile" className="flex">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <Separator />
              <DropdownMenuItem
                onClick={() => {
                  disconnect();
                }}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log Out</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button
          className="flex gap-2"
          onClick={() => {
            connectors[0].connect({ chainId: hederaTestnet.id });
          }}
        >
          <Wallet size={24} />
          <span>Login</span>
        </Button>
      )}
    </header>
  );
}
