"use client";

import { Input } from "@/components/ui/input";
import MessageItem from "./messageitem";
import { useQuery } from "@tanstack/react-query";
import { createTopic, sendMessage } from "./api";
import { useEffect } from "react";
import {
  ResizablePanelGroup,
  ResizableHandle,
  ResizablePanel,
} from "@/components/ui/resizable";
import Sidebar from "./sidebar";
import Messages from "./messages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Contact() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-full min-w-full"
      >
        <ResizablePanel defaultSize={20}>
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle className="bg-slate-700" />
        <ResizablePanel defaultSize={80}>
          <Messages />
        </ResizablePanel>
      </ResizablePanelGroup>
    </QueryClientProvider>
  );
}
