'use client'

import { ChakraProvider } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ApolloWrapper } from "./ApolloWrapper"
import { RequireLoginProvider } from "./RequireLogin"

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <ApolloWrapper>
        <QueryClientProvider client={queryClient}>
          <RequireLoginProvider>
            {children}
          </RequireLoginProvider>
        </QueryClientProvider>
      </ApolloWrapper>
    </ChakraProvider>
  )
}