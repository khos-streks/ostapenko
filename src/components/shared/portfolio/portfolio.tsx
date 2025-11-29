import { Container } from '../container'
import { Bluetongue } from './projects/bluetongue'

export function Portfolio() {
	return (
		<section
			id='work'
			className='py-12 scroll-mt-16'
		>
			<Container>
				<Bluetongue />
			</Container>
		</section>
	)
}
