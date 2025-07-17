'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { domAnimation, LazyMotion } from 'motion/react'
import { useState, type PropsWithChildren } from 'react'

export default function Provider({ children }: PropsWithChildren<unknown>) {
	const [queryClient] = useState(new QueryClient())
	return (
		<QueryClientProvider client={queryClient}>
			<LazyMotion features={domAnimation}>{children}</LazyMotion>
		</QueryClientProvider>
	)
}
