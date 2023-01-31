import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <Component {...pageProps} />
    </div>
  )
}
