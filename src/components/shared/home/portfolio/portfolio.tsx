import { PORTFOLIO } from './portfolio.data'
import { ImageWithSkeleton } from '@/components/ui/image-with-skeleton'

export function Portfolio() {
	return (
		<section className='bg-white p-8 rounded-xl shadow-2xl'>
			<h2 className='font-bold text-xl'>Portfolio</h2>
			<div className='mt-8 grid grid-cols-2 gap-8'>
				{PORTFOLIO.map((item, index) => (
					<a
						key={index}
						href={item.link}
						className='contents'
						target='_blank'
					>
						<article className='w-full flex items-center flex-col p-5 border rounded-xl shadow-lg gap-3 bg-neutral-50 hover:bg-neutral-100 hover:scale-[1.03] transition-all duration-300 cursor-pointer'>
							<ImageWithSkeleton
								containerClassName='w-full aspect-video rounded-xl'
								fill
								src={item.image}
								alt={item.title}
							/>
							<h3 className='text-center font-semibold text-lg'>{item.title}</h3>
							<p className='text-sm text-center'>{item.description}</p>
						</article>
					</a>
				))}
			</div>
		</section>
	)
}
