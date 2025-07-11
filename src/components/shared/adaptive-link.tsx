'use client'

import { HTMLAttributes } from 'react'
import { toast } from 'sonner'

interface AdaptiveLinkProps extends HTMLAttributes<HTMLAnchorElement> {
	href?: string
	clickMessage?: string
}

export function AdaptiveLink({ href, clickMessage, ...props }: AdaptiveLinkProps) {
	return (
		<a
			href={href && href.length ? href : '#'}
			className='contents'
			target={href?.length ? '_blank' : undefined}
			onClick={() => {
				if (clickMessage) {
					toast.error(clickMessage, {
						position: 'top-center'
					})
				}
			}}
			{...props}
		>
			{props.children}
		</a>
	)
}
