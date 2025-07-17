import { div as MotionDiv } from 'motion/react-m'
import { PropsWithChildren } from 'react'

export default function OpacityAnimation({ children }: PropsWithChildren) {
	return (
		<MotionDiv
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			exit={{ opacity: 0 }}
		>
			{children}
		</MotionDiv>
	)
}
