import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";

import dynamic from "next/dynamic";
const SyncTranslation = dynamic(
  () => {
    return import("core/SyncTranslation");
  },
  { ssr: false, loading: () => null },
);

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SyncTranslation />
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default appWithTranslation(App);
