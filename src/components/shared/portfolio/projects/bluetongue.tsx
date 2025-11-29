import { FeaturesSectionWithCardGradient } from '@/components/ui/features-with-gradient'
import clsx from 'clsx'
import { BLUETONGUE_HIGHLIGHTS } from './bluetongue.data'

export function Bluetongue() {
	return (
		<div>
			<h2 className='text-4xl font-semibold max-sm:text-xl'>
				Flagship Project — BlueTongue Web App
			</h2>
			<div className='flex items-center gap-2 mt-4 max-sm:flex-col max-sm:items-start max-sm:mt-2'>
				<p className='text-sm text-neutral-700'>
					<span
						className={clsx(
							'inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium max-sm:text-xs mr-2',
							'bg-yellow-100 text-yellow-800'
						)}
					>
						Upcoming
					</span>
					<span>
						Production launch scheduled in the next months. Architecture, UI, and core logic are
						fully implemented and production-ready.
					</span>
				</p>
			</div>
			<h3 className='mt-4'>Learn languages through books and interactive exercises.</h3>
			<p className='mb-16 mt-2 text-black/50 max-sm:text-sm max-sm:mb-4 [&_span]:text-black'>
				A production-grade web service for reading books and learning languages through structured
				exercises. Fully adaptive for mobile and desktop, with smooth animations, user-friendly UI,
				and multi-language support. This case highlights my engineering approach, frontend logic,
				and full-stack implementation.
			</p>

			<FeaturesSectionWithCardGradient grid={BLUETONGUE_HIGHLIGHTS} />

			<div className='mt-10 relative'>
				<div className='relative overflow-hidden rounded-2xl '>
					<div className='flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar mx-auto w-full justify-between pb-4 max-sm:gap-4'>
						{[
							{
								src: '/projects/bluetongue/screenshots/home.png',
								alt: 'Home dashboard interface'
							},
							{
								src: '/projects/bluetongue/screenshots/exercise.png',
								alt: 'Word exercise UI'
							},
							{
								src: '/projects/bluetongue/screenshots/tutor.png',
								alt: 'Interactive Tutor UI'
							},
							{
								src: '/projects/bluetongue/screenshots/report.png',
								alt: 'Word exercises report visual'
							},
							{
								src: '/projects/bluetongue/screenshots/reader.png',
								alt: 'Custom book reader UI'
							}
						].map((screenshot, i) => (
							<div
								key={i}
								className='flex-shrink-0 snap-center group'
							>
								<div className='relative max-sm:w-[200px] w-[270px] rounded-xl overflow-hidden bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105'>
									<img
										src={screenshot.src}
										alt={screenshot.alt}
										className='w-full h-full object-cover'
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4'>
										<p className='text-white text-sm font-medium'>{screenshot.alt}</p>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className='absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-50 to-transparent pointer-events-none max-sm:w-10' />
					<div className='absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-purple-50 to-transparent pointer-events-none max-sm:w-10' />
				</div>

				<p className='text-center text-sm text-neutral-500 mt-4 flex items-center justify-center gap-2'>
					<span className='inline-block w-6 h-0.5 bg-neutral-300 rounded' />
					Scroll horizontally to view more
					<span className='inline-block w-6 h-0.5 bg-neutral-300 rounded' />
				</p>
			</div>
		</div>
	)
}
