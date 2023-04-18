import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import CustomersProvider from '@/providers/CustomersProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomersProvider>
      <Component {...pageProps} />
    </CustomersProvider>
  )
}
