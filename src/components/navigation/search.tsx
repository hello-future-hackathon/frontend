"use client";

import React from "react";
import { Button } from "../ui/button";
import { Filter } from "lucide-react";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
} from "../ui/command";

export default function Search() {
  return (
    <div className="flex justify-end items-center gap-4 px-8 py-4">
      <div className="flex items-center">
        <Button className="flex gap-2">
          <Filter size={20} />
          <span>Filter</span>
        </Button>
      </div>
      <div className="flex-1 max-w-xs">
        <Command className="w-full">
          <CommandInput placeholder="Search..." />
        </Command>
      </div>
    </div>
  );
}
