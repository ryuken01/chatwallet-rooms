
import { mainnet } from 'viem/chains'
import { defaultWagmiConfig } from '@web3modal/wagmi'

export const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID'

const metadata = {
  name: 'ChatWallet Rooms',
  description: 'Decentralized Chat Rooms with Web3 Integration',
  url: 'https://chatwallet.rooms',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet]

export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata
})

export { chains }
