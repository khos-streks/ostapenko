import { FeaturesSectionWithHoverEffects } from '@/components/ui/features-with-hover'
import { Container } from '../container'
import { SERVICES } from './services.data'

export function Services() {
	return (
		<section
			id='services'
			className='py-12'
		>
			<Container>
				<h2 className='text-4xl font-semibold max-sm:text-xl'>What I do?</h2>
				<p className='mb-16 mt-2 text-black/50 max-sm:text-sm max-sm:mb-4'>
					I design, develop, and launch scalable <span className='text-black'>SaaS products</span> — from first prototype
					to full-cycle production.
				</p>

				<FeaturesSectionWithHoverEffects features={SERVICES} />
			</Container>
		</section>
	)
}
