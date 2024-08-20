"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";

export default function MessageItem({
  profileUrl,
  address,
  message,
  timestamp,
}: {
  profileUrl: string;
  address: string;
  message: string;
  timestamp: string;
}) {
  return (
    <div className="flex gap-2 items-center">
      <Avatar>
        <AvatarImage src={profileUrl} />
        <AvatarFallback className="bg-slate-600 text-white">
          {address.slice(0, 3)}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <div className="space-x-1">
          <Label className="text-white">{address}</Label>
          <span className="text-slate-600 text-sm">{timestamp}</span>
        </div>
        <span className="text-white">{message}</span>
      </div>
    </div>
  );
}
