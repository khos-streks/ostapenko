import Image from 'next/image'
import { Container } from '../container'
import { HeaderMenu } from './header-menu'
import { Dialog } from '@/components/ui/dialog'

export function Header() {
	return (
		<header
			className='fixed top-0 py-2.5 bg-white z-50 w-full'
			style={{ boxShadow: '0 4px 12px rgba(0,0,0,.02)' }}
		>
			<Container className='flex items-center justify-between h-[60px] max-sm:h-[50px]'>
				<Image
					src='/logo.svg'
					alt='Kostiantyn Ostapenko.'
					width={500}
					height={30}
					className='w-[320px] h-auto max-sm:w-[220px]'
				/>

				<HeaderMenu className='max-lg:hidden' />
				<Dialog
					trigger={
						<button className='lg:hidden space-y-2 h-full px-6 max-sm:px-2 max-sm:space-y-1.5'>
							<hr className='h-0.5 w-8 max-sm:w-5 max-sm:h-[1.5px] bg-black border-none' />
							<hr className='h-0.5 w-8 max-sm:w-5 max-sm:h-[1.5px] bg-black border-none' />
						</button>
					}
				>
					<HeaderMenu className='flex-col gap-20 max-sm:gap-12 max-sm:text-base' />
				</Dialog>
			</Container>
		</header>
	)
}
