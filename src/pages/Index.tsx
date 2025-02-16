
import { useEffect } from 'react'
import { useAccount } from 'wagmi'
import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { MessageCircle } from 'lucide-react'

const Index = () => {
  const { open } = useWeb3Modal()
  const { isConnected } = useAccount()
  const navigate = useNavigate()

  // Automatically redirect to chat when connected
  useEffect(() => {
    if (isConnected) {
      navigate('/chat')
    }
  }, [isConnected, navigate])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <div className="animate-fade-in space-y-6">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-8 rounded-full bg-white/10 backdrop-blur-xl">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight">
              ChatWallet Rooms
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/60">
              Connect your wallet to join decentralized chat rooms and start messaging in a Web3 native environment
            </p>

            <div className="mt-8 space-y-4">
              <Button 
                onClick={() => open()}
                className="px-8 py-6 text-lg bg-white text-black hover:bg-white/90 transition-all duration-300"
              >
                Connect Wallet
              </Button>
              
              <p className="text-sm text-white/40">
                Powered by secure blockchain technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
