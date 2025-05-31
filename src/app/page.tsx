import Container from '@/components/layout/container'
import { Contacts } from '@/components/shared/home/contacts'
import { Experience } from '@/components/shared/home/experience'
import { Header } from '@/components/shared/home/header'
import { Portfolio } from '@/components/shared/home/portfolio/portfolio'
import { Skills } from '@/components/shared/home/skills/skills'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Ostapenko Kostiantyn',
	description:
		'Professional web development services for businesses worldwide. Offering custom SaaS solutions, AI-powered applications, and seamless e-commerce integrations. Helping companies scale efficiently with tailored, high-performance websites. Contact us for expert web development and optimization.'
}

export default function Home() {
	return (
		<Container>
			<div className='flex gap-8 w-full'>
				<div className='flex flex-col gap-8 w-2/3'>
					<Header />
					<Portfolio />
				</div>
				<div className='flex flex-col gap-8 w-1/3'>
					<Experience />
					<Skills />
				</div>
			</div>
			<Contacts />
		</Container>
	)
}
