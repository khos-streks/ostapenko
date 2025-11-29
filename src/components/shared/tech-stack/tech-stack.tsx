import { IconCloud } from '@/components/ui/interactive-icon-cloud'
import { Container } from '../container'
import { ICONS } from './tech-stack.data'

export function TechStack() {
	const left = ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Express']
	const right = ['Nest.js', 'Prisma ORM', 'PostgreSQL', 'Tailwind CSS', 'Git', 'AWS Integration']

	return (
		<section
			id='stack'
			className='py-12 scroll-mt-16'
		>
			<Container>
				<h2 className='text-4xl font-semibold max-sm:text-xl'>Engineering Stack</h2>
				<p className='mt-2 text-black/50 max-sm:text-sm max-sm:mb-4 [&_span]:text-black'>
					A carefully chosen set of modern tools and technologies that ensure every SaaS product I
					build is <span>fast</span>, <span>scalable</span>, <span>secure</span>, and{' '}
					<span>maintainable</span>.
				</p>

				<div className='mt-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12'>
					{/* Left stack (desktop) */}
					<ul className='hidden md:flex flex-col items-end gap-4 text-base md:text-lg font-semibold text-black/90 w-48 self-center list-disc list-inside marker:text-black/70 marker:text-xl'>
						{left.map(item => (
							<li
								key={item}
								className='leading-tight py-1'
							>
								{item}
							</li>
						))}
					</ul>

					{/* Center icon cloud */}
					<div className='flex-1 flex justify-center items-center'>
						<div className='w-full max-w-[560px] flex items-center justify-center'>
							<IconCloud iconSlugs={ICONS} />
						</div>
					</div>

					{/* Right stack (desktop) */}
					<ul className='hidden md:flex flex-col items-start gap-4 text-base md:text-lg font-semibold text-black/90 w-48 self-center list-disc list-inside marker:text-black/70 marker:text-xl'>
						{right.map(item => (
							<li
								key={item}
								className='leading-tight py-1'
							>
								{item}
							</li>
						))}
					</ul>

					{/* Mobile: 2-column grid for the stack text */}
					<ul className='md:hidden grid grid-cols-2 gap-3 w-full text-base font-semibold text-black/90 mt-4 list-disc pl-5'>
						{[...left, ...right].map(item => (
							<li
								key={item}
								className='text-left leading-tight py-1'
							>
								{item}
							</li>
						))}
					</ul>
				</div>
			</Container>
		</section>
	)
}
