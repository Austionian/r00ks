import { AppProps } from 'next/app'
import '../styles/tailwind.css'
import 'tailwindcss/utilities.css'
import '../styles/toggle.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}