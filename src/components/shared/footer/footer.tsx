import Image from 'next/image'
import { Container } from '../container'
import { HeaderMenu } from '../header/header-menu'
import { FOOTER_SOCIAL } from './footer.data'
import Link from 'next/link'

export function Footer() {
	return (
		<footer
			className='border-t py-5 bg-white z-50 w-full'
			style={{ boxShadow: '0 4px 12px rgba(0,0,0,.02)' }}
		>
			<Container className='flex items-start justify-between max-md:flex-col max-md:justify-start'>
				<div className='flex flex-col gap-1.5'>
					<Image
						src='/logo.svg'
						alt='Kostiantyn Ostapenko.'
						width={500}
						height={30}
						className='w-[250px] h-auto'
					/>
					<span className='text-sm'>Fullstack Engineer</span>

					<div className='mt-4 flex items-center gap-4'>
						{FOOTER_SOCIAL.map(({ link, node: Component }, idx) => (
							<Link
								target='_blank'
								key={idx}
								href={link}
							>
								<Component />
							</Link>
						))}
					</div>
				</div>
				<HeaderMenu
					contactSource='footer'
					className='text-base max-md:mt-4 max-sm:flex-col max-sm:items-start max-sm:gap-4 max-sm:mt-8'
				/>
			</Container>
			<Container className='mt-4 text-black/60 text-sm'>
				<hr className='mb-4' />© {new Date().getFullYear()} Kostiantyn. All rights reserved.
			</Container>
		</footer>
	)
}
