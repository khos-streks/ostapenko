'use client'

import { DialogContext } from '@/components/ui/dialog'
import { useContext } from 'react'
import { HEADER_MENU } from './header.data'
import clsx from 'clsx'
import UnderlineLink from '@/components/ui/underline-link'

export function HeaderMenu({ className }: { className?: string }) {
	const dialogContext = useContext(DialogContext)
	const closeDialog = dialogContext?.closeDialog

	return (
		<ul className={clsx('flex items-center gap-8', className)}>
			{HEADER_MENU.map((item, idx) => (
				<li
					key={idx}
					onClick={closeDialog}
				>
					{item.function === 'contact' ? (
						<UnderlineLink ariaLabel={item.ariaLabel}>{item.label}</UnderlineLink>
					) : (
						<UnderlineLink
							href={item.link}
							ariaLabel={item.ariaLabel}
						>
							{item.label}
						</UnderlineLink>
					)}
				</li>
			))}
		</ul>
	)
}
