import { Advantages } from '@/components/shared/advantages/advantages'
import { Cta } from '@/components/shared/cta/cta'
import { Hero } from '@/components/shared/hero/hero'
import { Partners } from '@/components/shared/partners/partners'
import { Portfolio } from '@/components/shared/portfolio/portfolio'
import { Services } from '@/components/shared/services/services'
import { TechStack } from '@/components/shared/tech-stack/tech-stack'
import { generateMeta } from '@/utils/generateMeta'

export async function generateMetadata() {
	return await generateMeta({
		title: 'Kostiantyn Ostapenko',
		description:
			'Full-stack engineer specializing in scalable SaaS development. I build fast, reliable, user-focused applications with clean architecture, solid engineering practices, and seamless delivery.'
	})
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
			<Cta />
		</>
	)
}
