import clsx from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'
import { Container } from '../container'
import { HEADER_MENU } from './header.data'

function HeaderSection({ children, className }: { children?: ReactNode; className?: string }) {
	return (
		<div
			className={clsx(
				'bg-black/50 border border-white/20 w-min text-nowrap px-4 h-full flex items-center rounded-2xl',
				className
			)}
		>
			{children}
		</div>
	)
}

export function Header() {
	return (
		<header className='fixed top-5 z-50 w-full'>
			<Container className='flex items-center justify-between h-[60px]'>
				<HeaderSection>
					<h1 className='font-semibold'>Kostiantyn Ostapenko</h1>
				</HeaderSection>
				<HeaderSection>
					<nav>
						<ul className='flex items-center gap-8'>
							{HEADER_MENU.map((item, idx) => (
								<li
									key={idx}
									className='relative hover:after:content-[""] hover:after:w-full hover:after:h-[1px] hover:after:bg-white hover:after:block after:w-0 after:transition-all after:duration-300 after:absolute after:top-full after:translate-y-1'
								>
									<Link href={item.href}>{item.title}</Link>
								</li>
							))}
						</ul>
					</nav>
				</HeaderSection>
			</Container>
		</header>
	)
}
