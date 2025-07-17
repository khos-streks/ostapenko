import { ImageWithSkeleton } from '@/components/ui/image-with-skeleton'
import * as m from 'motion/react-m'
import { AdaptiveLink } from '../../adaptive-link'
import { PORTFOLIO } from './portfolio.data'

export function Portfolio() {
	console.log('Projects total:', PORTFOLIO.length)
	return (
		<section
			className='bg-white p-8 rounded-xl shadow-2xl max-sm:p-4'
		>
			<h2 className='font-bold text-xl'>Commercial projects</h2>
			<div className='mt-8 max-sm:mt-4 grid grid-cols-2 gap-8 max-lg:grid-cols-1'>
				{PORTFOLIO.map((item, index) => (
					<AdaptiveLink
						key={index}
						href={item.link}
						className='contents'
						clickMessage={item.clickMessage}
					>
						<m.article
							className={`w-full flex items-center flex-col p-5 border rounded-xl shadow-lg gap-3 bg-neutral-50 hover:bg-neutral-100 transition-all duration-300 cursor-pointer ${
								item.highlighted ? 'border-amber-500 border-2 relative' : ''
							}`}
						>
							{item.highlighted && (
								<div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full font-bold text-sm'>
									Highlighted
								</div>
							)}
							<div className='w-full aspect-video rounded-xl overflow-hidden'>
								<ImageWithSkeleton
									containerClassName='w-full h-full'
									className='rounded-xl'
									fill
									priority
									src={item.image}
									alt={item.title}
									sizes='100%, 100%'
								/>
							</div>
							<h3 className='text-center font-semibold text-lg'>{item.title}</h3>
							<p
								className='text-sm text-center'
								dangerouslySetInnerHTML={{ __html: item.description }}
							/>
						</m.article>
					</AdaptiveLink>
				))}
			</div>
		</section>
	)
}
