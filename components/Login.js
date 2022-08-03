import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import {useWallet} from '@solana/wallet-adapter-react'// useing for payment done by user
import React from 'react'
import  {Payment} from './payment'
const styles = {
  LoginPage:`w-screen h-screen bg-white flex
  justify-center flex-col items-center`,
  text :`text-4xl text-black mb-10`,
}
const Login = () => {
  const wallet=useWallet()//check wallet connected or not
  //agr wallet connected hai to use payment ke undar bjdo
  if(wallet.connected) return <Payment/>
  return (

    <div className={styles.LoginPage}>
    <p className={styles.text}> Login to access app</p>
    <WalletMultiButton/>
    </div>
  )
}

export default Login