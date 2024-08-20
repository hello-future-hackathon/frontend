import { http, createConfig } from "wagmi";
import { hederaTestnet } from "wagmi/chains";
import { metaMask, injected } from "wagmi/connectors";

export const config = createConfig({
  chains: [hederaTestnet],
  connectors: [metaMask()],
  ssr: true,
  transports: {
    [hederaTestnet.id]: http("https://testnet.hashio.io/api"),
  },
});
