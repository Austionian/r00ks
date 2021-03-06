import "../styles/tailwind.css";

import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";

import siteMetadata from "@/data/siteMetadata.js";
import LayoutWrapper from "@/components/LayoutWrapper";

const isDevelopment = process.env.NODE_ENV === "development";
const isSocket = process.env.SOCKET;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
