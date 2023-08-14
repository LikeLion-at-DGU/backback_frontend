import BaseLayout from "@/layouts/BaseLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <BaseLayout>
        <Head>
          <title>울끈불끈</title>
          <link rel="icon" href="/favicon.png" />
          <meta name="description" content="당신을 위한 내 손 안의 운동장" />
        </Head>
        <Component {...pageProps} />
      </BaseLayout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
