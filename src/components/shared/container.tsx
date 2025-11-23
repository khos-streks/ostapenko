import clsx from 'clsx'
import type { PropsWithChildren } from 'react'

export function Container({ children, ...props }: PropsWithChildren<React.ComponentProps<'div'>>) {
	return (
		<div
			{...props}
			className={clsx('max-w-[1400px] w-full mx-auto px-6', props.className)}
		>
			{children}
		</div>
	)
}
