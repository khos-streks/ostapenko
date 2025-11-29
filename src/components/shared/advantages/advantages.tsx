import { Container } from '../container'
import { ADVANTAGES } from './advantages.data'
import { FeaturesSectionWithCardGradient } from '@/components/ui/features-with-gradient'

export function Advantages() {
	return (
		<section
			id='advantages'
			className='py-12 scroll-mt-16'
		>
			<Container>
				<h2 className='text-4xl font-semibold max-sm:text-xl'>Why choose me?</h2>
				<p className='mt-2 mb-5 text-black/50 max-sm:text-sm max-sm:mb-4'>
					Key strengths that ensure high-quality, reliable SaaS products.
				</p>

				<FeaturesSectionWithCardGradient gridCols={3} grid={ADVANTAGES} />
			</Container>
		</section>
	)
}
