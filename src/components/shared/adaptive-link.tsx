'use client'

import { HTMLAttributes } from 'react'

interface AdaptiveLinkProps extends HTMLAttributes<HTMLAnchorElement> {
	href: string
}

export function AdaptiveLink({ href, ...props }: AdaptiveLinkProps) {
	return (
		<a
			href={href || '#'}
			className='contents'
			target={href?.length ? '_blank' : undefined}
			onClick={props.onClick}
			{...props}
		>
			{props.children}
		</a>
	)
}
