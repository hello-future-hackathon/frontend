"use client";

import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useAccount, useConnectors } from "wagmi";
import { redirect, useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Modal() {
  const connectors = useConnectors();
  const account = useAccount();
  const router = useRouter();

  return (
    <DialogContent className="bg-slate-900">
      <DialogHeader className="mb-4">
        <DialogTitle className="flex space-x-2 items-center text-macchiato-blue">
          <Image src="/logo.svg" alt="logo" width={36} height={36} />
          <span>Telepathy</span>
        </DialogTitle>
        <DialogTitle className="mx-auto text-white text-xl font-bold">
          Connect a Wallet
        </DialogTitle>
      </DialogHeader>
      <Button
        className="bg-macchiato-peach space-x-2 hover:bg-orange-300"
        onClick={async () => {
          try {
            const res = await connectors[0].connect();
            if (res["accounts"].length > 0) {
              router.push("/dashboard/contact");
            }
          } catch (error) {
            toast("Fail to connect wallet.");
          }
        }}
      >
        {account.status === "connecting" && <Spinner />}
        <Image src="/metamask.svg" alt="metamask" width={36} height={24} />
        <span className="text-slate-900 text-lg">Metamask</span>
      </Button>
    </DialogContent>
  );
}
