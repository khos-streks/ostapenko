import { Advantages } from '@/components/shared/advantages/advantages'
import { Hero } from '@/components/shared/hero/hero'
import { Partners } from '@/components/shared/partners/partners'
import { Portfolio } from '@/components/shared/portfolio/portfolio'
import { Services } from '@/components/shared/services/services'
import { TechStack } from '@/components/shared/tech-stack/tech-stack'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Ostapenko Kostiantyn',
	description:
		'Professional web development services for businesses worldwide. Offering custom SaaS solutions, AI-powered applications, and seamless e-commerce integrations. Helping companies scale efficiently with tailored, high-performance websites. Contact us for expert web development and optimization.'
}

export default function Home() {
	return (
		<>
			<Hero />
			<Partners />
			<Services />
			<Advantages />
			<TechStack />
			<Portfolio />
		</>
	)
}
