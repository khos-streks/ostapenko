'use client'

import LogoLoop from '@/components/ui/logo-loop'
import { CircleIcon } from 'lucide-react'
import { PARTNERS } from './partners.data'

export function Partners() {
	return (
		<section className='py-7 max-sm:py-4 border-y'>
			<LogoLoop
				renderItem={item => (
					<span className='text-3xl max-sm:text-xl max-[450px]:text-base inline-flex items-center gap-5 opacity-50 font-medium'>
						{item.title}{' '}
						<CircleIcon className='w-[18px] h-[18px] max-[450px]:w-[14px] max-[450px]:h-[14px]' />
					</span>
				)}
				className='[&_li]:flex [&_li]:items-center'
				logos={PARTNERS.map(partner => ({ title: partner })) as any[]}
				speed={120}
				hoverSpeed={-120}
				direction='right'
				gap={20}
				fadeOut
				fadeOutColor='#ffffff'
				ariaLabel='Partners'
			/>
		</section>
	)
}
