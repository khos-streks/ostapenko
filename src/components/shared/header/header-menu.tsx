'use client'

import { DialogContext } from '@/components/ui/dialog'
import { useContext } from 'react'
import { HEADER_MENU } from './header.data'
import clsx from 'clsx'
import Link from 'next/link'

export function HeaderMenu({ className }: { className?: string }) {
	const dialogContext = useContext(DialogContext)
	const closeDialog = dialogContext?.closeDialog

	return (
		<ul className={clsx('flex items-center gap-8', className)}>
			{HEADER_MENU.map((item, idx) => (
				<li
					onClick={closeDialog}
					key={idx}
					className='relative hover:after:content-[""] hover:after:w-full hover:after:h-[1px] hover:after:bg-white hover:after:block after:w-0 after:transition-all after:duration-300 after:absolute after:top-full after:translate-y-1'
				>
					<Link href={item.href}>{item.title}</Link>
				</li>
			))}
		</ul>
	)
}
