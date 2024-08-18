import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Wallet2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <header className="flex justify-between items-center px-8 py-4">
        <h1 className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={48} height={48} />
          <span className="text-macchiato-blue text-xl font-bold">
            Telepathy
          </span>
        </h1>
        <Button className="flex gap-2 bg-macchiato-blue text-slate-800 hover:bg-macchiato-sky">
          <Wallet2 />
          <span>Login</span>
        </Button>
      </header>
      <main className="">
        <h2 className="text-macchiato-gray-100 text-4xl font-bold">
          Welcome to Telepathy: Communicate Freely, Securely, and Anonymously
        </h2>
      </main>
    </div>
  );
}
