
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi'
import { mainnet } from 'viem/chains'
import { configureChains, createConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID'

const metadata = {
  name: 'ChatWallet Rooms',
  description: 'Decentralized Chat Rooms with Web3 Integration',
  url: 'https://chatwallet.rooms',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const { chains, publicClient } = configureChains(
  [mainnet],
  [publicProvider()]
)

export const config = createConfig({
  autoConnect: true,
  publicClient,
})

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  chains,
  defaultChain: mainnet
})

export { chains }
