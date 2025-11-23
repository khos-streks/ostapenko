import clsx from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'

interface UnderlineLinkProps {
	href: string
	children: ReactNode
	className?: string
	ariaLabel?: string
}

export default function UnderlineLink({
	href,
	children,
	className = '',
	ariaLabel
}: UnderlineLinkProps) {
	return (
		<Link
			href={href}
			aria-label={ariaLabel}
			className={clsx('relative group inline-block', className)}
		>
			<span className='transition-colors duration-300 group-hover:text-black/70'>{children}</span>
			<span className='absolute left-0 top-full w-0 h-[1px] bg-black/70 transition-all duration-300 group-hover:w-full'></span>
		</Link>
	)
}
