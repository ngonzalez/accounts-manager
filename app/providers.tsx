'use client';

import {NextUIProvider} from '@nextui-org/react'
import {ApolloProvider} from '@apollo/client';
import client from './lib/apollo';

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </NextUIProvider>
  )
}
