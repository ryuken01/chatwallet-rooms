
import { mainnet } from 'viem/chains'
import { createConfig, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

export const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID'

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
  publicClient
})

export { chains, metadata }
