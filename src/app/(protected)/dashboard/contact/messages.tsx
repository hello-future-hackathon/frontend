"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import MessageItem from "./messageitem";
import { useQuery } from "wagmi/query";
import { z } from "zod";
import { createTopic, sendMessage } from "./api";
import useWebSocket, { ReadyState } from "react-use-websocket";

export default function Messages() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const { lastMessage } = useWebSocket(
    `${process.env.NEXT_PUBLIC_API_URL}/ws`,
    {
      onOpen: () => console.log("opened"),
      shouldReconnect: (closeEvent) => true,
    },
  );

  useEffect(() => {
    setMessages((prev) => [...prev, lastMessage?.data]);
  }, [lastMessage]);

  return (
    <div className="flex flex-col min-h-full justify-between p-4">
      <div className="space-y-4">
        {messages.map((msg, i) => (
          <MessageItem
            key={i}
            profileUrl="T"
            address="0x9ABc..."
            message={msg}
            timestamp="1m ago"
          />
        ))}
      </div>
      <Input
        className="bg-slate-900 text-white"
        placeholder="Send Message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={async (e) => {
          if (e.key === "Enter") {
            const res = await sendMessage({ topicId: 4703702, message });
            setMessage("");
          }
        }}
      />
    </div>
  );
}
