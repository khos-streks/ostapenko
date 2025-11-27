import { FeaturesSectionWithCardGradient } from '@/components/ui/features-with-gradient'
import { Container } from '../container'
import clsx from 'clsx'

export function Portfolio() {
	return (
		<section
			id='work'
			className='py-12 scroll-mt-16'
		>
			<Container>
				<h2 className='text-4xl font-semibold max-sm:text-xl'>
					Flagship Project — BlueTongue Web App
				</h2>
				<div className='flex items-center gap-2 mt-4'>
					<span
						className={clsx(
							'inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium',
							'bg-yellow-100 text-yellow-800'
						)}
					>
						Upcoming
					</span>
					<p className='text-sm text-neutral-700'>
						Production launch scheduled in the next months. Architecture, UI, and core logic are
						fully implemented and production-ready.
					</p>
				</div>
				<h3 className='mt-4'>Learn languages through books and interactive exercises.</h3>
				<p className='mb-16 mt-2 text-black/50 max-sm:text-sm max-sm:mb-4 [&_span]:text-black'>
					A production-grade web service for reading books and learning languages through structured
					exercises. Fully adaptive for mobile and desktop, with smooth animations, user-friendly
					UI, and multi-language support. This case highlights my engineering approach, frontend
					logic, and full-stack implementation.
				</p>
				<FeaturesSectionWithCardGradient
					grid={[
						{
							title: 'Responsive Design',
							description:
								'Fully mobile-first and desktop-ready interface based on Figma, including light and dark themes.'
						},
						{
							title: 'Flexible Authentication',
							description: 'OAuth via Google/Apple and classic email/password registration'
						},
						{
							title: 'Advanced Book Catalog',
							description:
								'Live search, genre and author filters, favorites, and progress indicators for each book.'
						},
						{
							title: 'Personal Dictionary',
							description: 'Custom user dictionaries with tracking for learned and repeated words.'
						},
						{
							title: 'Tutor Exercises',
							description:
								'Structured learning with progress calculation and intelligent word repetition logic.'
						},
						{
							title: 'Built-In Reader',
							description:
								'Adaptive reading interface with bookmarks, word lookup, and instant add-to-dictionary.'
						},
						{
							title: 'Subscription System',
							description:
								'Subscription management with cancel, renew, discount support, and feedback handling.'
						},
						{
							title: 'Multi-Language Support',
							description: 'Full localization for English, Russian, and Ukrainian interfaces.'
						}
					]}
				/>
			</Container>
		</section>
	)
}
