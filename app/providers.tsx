'use client';

import { NextUIProvider } from '@nextui-org/react'
import { Client, cacheExchange, fetchExchange } from '@urql/core'

export function Providers({children}: { children: React.ReactNode }) {

  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}
