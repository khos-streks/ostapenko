'use client'

import * as m from 'motion/react-m'
import { PropsWithChildren } from 'react'

export default function OpacityAnimation({ children }: PropsWithChildren) {
	return (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			exit={{ opacity: 0 }}
		>
			{children}
		</m.div>
	)
}
