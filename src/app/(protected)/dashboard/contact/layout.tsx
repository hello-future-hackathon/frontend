import type { Metadata } from "next";
import Sidebar from "./sidebar";
import {
  ResizablePanelGroup,
  ResizableHandle,
  ResizablePanel,
} from "@/components/ui/resizable";

export const metadata: Metadata = {
  title: "Telepathy - Dashboard",
  description: "",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-w-full">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-full min-w-full"
      >
        <ResizablePanel defaultSize={10}>
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle className="bg-slate-700" />
        <ResizablePanel defaultSize={90}>{children}</ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
