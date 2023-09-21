import Layout from '@/components/Layout'
import Modal from '@/components/Modal'
import LoginModal from '@/components/modals/LoginModal'
import RegisterModal from '@/components/modals/RegisterModal'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import {SessionProvider} from 'next-auth/react';
import EditModal from '@/components/modals/EditModal'
import localFont from 'next/font/local'

const iranSans = localFont({
  src:'../public/fonts/IRANSans_Medium/IRANSans_Medium.ttf',
  variable: '--font-iranSans',
  display:'swap'
})

export default function App({ Component, pageProps }: AppProps) {
  return(
    <SessionProvider session={pageProps.session}>
    {/* <Modal isOpen title="test modal" actionLabel='Submit' /> */}
    <Toaster />
    <EditModal />
    <LoginModal />
    <RegisterModal />
      <Layout>
        <main className={iranSans.className}>

        <Component {...pageProps} className={iranSans.className}/>
        </main>
      </Layout>    
    </SessionProvider>
    )
}
