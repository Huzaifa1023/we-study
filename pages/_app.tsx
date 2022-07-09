import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../Components/Layout/Layout'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [auth,setAuth] = useState<boolean>()
  useEffect(()=> {
    if (typeof window !== 'undefined') {
      const auth = JSON.parse(localStorage.getItem('auth') || "false")
      setAuth(auth)
    }
  },[])
  return (
  <Layout isAuth={auth}>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
