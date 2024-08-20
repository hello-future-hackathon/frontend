"use client";

import { Input } from "@/components/ui/input";
import { Command, CommandInput } from "@/components/ui/command";
import { Separator } from "@/components/ui/separator";
import ContactItem from "./contactitem";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full p-4 bg-slate-900 border-r border-slate-800">
      <h2 className="text-white font-bold text-xl mb-4">Contact</h2>
      <ContactItem
        profileUrl="/metamask.svg"
        nickname="0x9ABc78020261908cFA79289743Ffd47322f909D8"
      />
    </div>
  );
}
