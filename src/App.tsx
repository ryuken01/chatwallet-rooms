
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { WagmiConfig } from 'wagmi'
import { createWeb3Modal } from '@web3modal/wagmi'
import { config, projectId, chains, metadata } from './lib/web3Config'
import Index from "./pages/Index"
import NotFound from "./pages/NotFound"

const queryClient = new QueryClient()

// Initialize Web3Modal with all required options
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  chains,
  themeMode: 'dark',
  themeVariables: {
    '--w3m-font-family': 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont',
  },
  metadata
})

const App = () => (
  <WagmiConfig config={config}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </WagmiConfig>
)

export default App
