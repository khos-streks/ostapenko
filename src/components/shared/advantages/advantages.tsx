import RuixenBentoCards from '@/components/ui/bento-cards'
import { Container } from '../container'
import { ADVANTAGES } from './advantages.data'

export function Advantages() {
	return (
		<section
			id='advantages'
			className='py-12 scroll-mt-16'
		>
			<Container>
				<h2 className='text-4xl font-semibold max-sm:text-xl'>Why choose me?</h2>
				<p className='mt-2 text-black/50 max-sm:text-sm max-sm:mb-4'>
					Key strengths that ensure high-quality, reliable SaaS products.
				</p>

				<RuixenBentoCards cards={ADVANTAGES} />
			</Container>
		</section>
	)
}
