import { createConnector } from "wagmi";

const connect = async ({
  chainId,
  isReconnecting,
}: {
  chainId: number | undefined;
  isReconnecting: boolean | undefined;
}) => {
  await window.ethereum.request();
};

export default function HederaWallet() {
  return createConnector((config) => ({
    id: "@hashgraph/hedera-wallet-snap",
    name: "Hedera Wallet",
    icon: "/hedera-wallet.svg",
    supportsSimulation: false,
  }));
}
