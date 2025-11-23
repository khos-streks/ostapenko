import clsx from 'clsx'
import { ReactNode } from 'react'
import { Container } from '../container'
import { MenuIcon } from 'lucide-react'
import { Dialog } from '@/components/ui/dialog'
import { HeaderMenu } from './header-menu'

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
			<Container className='flex items-center justify-between h-[60px] max-sm:h-[50px]'>
				<HeaderSection>
					<h1 className='font-semibold'>Kostiantyn Ostapenko</h1>
				</HeaderSection>
				<HeaderSection className='max-lg:p-0'>
					<Dialog
						trigger={
							<button className='lg:hidden px-4 h-full'>
								<MenuIcon />
							</button>
						}
					>
						<HeaderMenu className='flex-col gap-20 font-medium text-lg' />
					</Dialog>

					<nav className='max-lg:hidden'>
						<HeaderMenu />
					</nav>
				</HeaderSection>
			</Container>
		</header>
	)
}
