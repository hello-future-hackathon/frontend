import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Modal from "./modal";
import Provider from "./providers";

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
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex space-x-2 bg-macchiato-blue text-slate-800 font-bold hover:bg-latte-blue hover:text-white">
              <span>Get Started</span>
            </Button>
          </DialogTrigger>
          <Provider>
            <Modal />
          </Provider>
        </Dialog>
      </header>
      <main className="">
        <h2 className="text-macchiato-gray-100 text-4xl font-bold">
          Welcome to Telepathy: Communicate Freely, Securely, and Anonymously
        </h2>
      </main>
    </div>
  );
}
