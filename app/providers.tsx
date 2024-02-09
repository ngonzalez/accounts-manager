'use client';

import { NextUIProvider } from '@nextui-org/react'
import { Client, cacheExchange, fetchExchange } from '@urql/core'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import client from "@/app/lib/apollo";

export function Providers({children}: { children: React.ReactNode }) {

  return (
    <ApolloProvider client={client}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </ApolloProvider>
  )
}
