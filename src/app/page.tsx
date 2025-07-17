import Container from '@/components/layout/container'
import { Awards } from '@/components/shared/home/awards'
import { Contacts } from '@/components/shared/home/contacts'
import { Experience } from '@/components/shared/home/experience'
import { Header } from '@/components/shared/home/header'
import { Portfolio } from '@/components/shared/home/portfolio/portfolio'
import { Skills } from '@/components/shared/home/skills/skills'
import { Metadata } from 'next'
import OpacityAnimation from '@/components/ui/animations/opacity'

export const metadata: Metadata = {
	title: 'Ostapenko Kostiantyn',
	description:
		'Professional web development services for businesses worldwide. Offering custom SaaS solutions, AI-powered applications, and seamless e-commerce integrations. Helping companies scale efficiently with tailored, high-performance websites. Contact us for expert web development and optimization.'
}

export default function Home() {
	return (
		<OpacityAnimation>
			<Container>
				<Header className='lg:hidden mb-8' />
				<div className='flex gap-8 w-full max-md:flex-col-reverse'>
					<div className='flex flex-col gap-8 w-2/3 max-lg:w-1/2 max-md:w-full'>
						<Header className='max-lg:hidden' />
						<Portfolio />
					</div>
					<div className='flex flex-col gap-8 w-1/3 max-lg:w-1/2 max-md:w-full'>
						<Experience
							firstBlockClassName='max-md:order-2'
							secondBlockClassName='max-md:order-3'
						/>
						<Awards className='max-md:order-5' />
						<Skills className='max-md:order-1' />
					</div>
				</div>
				<Contacts className='max-md:order-4' />
			</Container>
		</OpacityAnimation>
	)
}
