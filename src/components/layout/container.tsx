import clsx from 'clsx'
import type { PropsWithChildren } from 'react'

export default function Container({
	children,
	className
}: PropsWithChildren<{ className?: string }>) {
	return (
		<div className={clsx('max-w-[1200px] mx-auto px-3 py-10', className)}>
			<div className='bg-[#e0e0e0] rounded-2xl overflow-hidden p-8 max-sm:p-2'>{children}</div>
		</div>
	)
}
