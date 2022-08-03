import { ConnectionProvider,WalletProvider } from "@solana/wallet-adapter-react"

import {WalletModalProvider} from '@solana/wallet-adapter-react-ui'
import {PhantomWalletAdapter} from '@solana/wallet-adapter-wallets'//These packages provide adapters for each wallet.and connect with phantom wallet
import {useMemo} from 'react' // skips the rendering in reac t if componenet is not changed to optimise performance
import {SOLANA_HOST} from "../utils/const"
const WalletConnectionProvider = ({children}) => {
 // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
// Only the wallets you configure here will be compiled into your application and only the dependencies
// of wallets that your users connect to will be loaded.

 const endpoint=useMemo(()=>SOLANA_HOST,[])
    const wallets=useMemo(()=>[new PhantomWalletAdapter()],[])
 
    return (
    <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets}
   autoconnect>
    {/* if solan aleready there than automatically connect */}
<WalletModalProvider>
    {children}
</WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>
  )
}

export default WalletConnectionProvider