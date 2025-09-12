import Container from '@/components/layout/container'
import { Awards } from '@/components/shared/home/awards'
import { Contacts } from '@/components/shared/home/contacts'
import { Experience } from '@/components/shared/home/experience'
import { Header } from '@/components/shared/home/header'
import { Portfolio } from '@/components/shared/home/portfolio/portfolio'
import { Skills } from '@/components/shared/home/skills/skills'
import { Metadata } from 'next'
import OpacityAnimation from '@/components/ui/animations/opacity'
import { Blockquote } from '@/components/ui/blockquote'

export const metadata: Metadata = {
	title: 'Ostapenko Kostiantyn',
	description:
		'Professional web development services for businesses worldwide. Offering custom SaaS solutions, AI-powered applications, and seamless e-commerce integrations. Helping companies scale efficiently with tailored, high-performance websites. Contact us for expert web development and optimization.'
}

export default function Home() {
	return (
		<OpacityAnimation>
			<Container>
				<div className='flex gap-8 w-full max-md:flex-col'>
					<div className='flex flex-col gap-8 w-2/3 max-md:contents max-lg:w-1/2'>
						<Header />
						<Blockquote>If I developed something, it’s obviously worth using.</Blockquote>
						<Portfolio className='max-md:order-5' />
						<Contacts className='max-md:order-6' />
					</div>
					<div className='flex flex-col gap-8 w-1/3 max-md:contents max-lg:w-1/2'>
						<Experience />
						<Awards />
						<Skills />
					</div>
				</div>
			</Container>
		</OpacityAnimation>
	)
}
