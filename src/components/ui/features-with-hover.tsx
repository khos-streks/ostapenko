import clsx from 'clsx'
import { LucideIcon } from 'lucide-react'

export function FeaturesSectionWithHoverEffects({
	features
}: {
	features: { title: string; description: string; icon: LucideIcon }[]
}) {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-7xl mx-auto'>
			{features.map((feature, index) => (
				<Feature
					key={feature.title}
					Icon={feature.icon}
					{...feature}
					index={index}
					total={features.length}
				/>
			))}
		</div>
	)
}

const Feature = ({
	title,
	description,
	Icon,
	index,
	total
}: {
	title: string
	description: string
	Icon: LucideIcon
	index: number
	total: number
}) => {
	const isLastInRowLg = (index + 1) % 3 === 0
  const isLastInRowSm = (index + 1) % 2 === 0
  
  const itemsInLastRowLg = total % 3 === 0 ? 3 : total % 3
  const itemsInLastRowSm = total % 2 === 0 ? 2 : total % 2
  
  const isLastRowLg = index >= total - itemsInLastRowLg
  const isLastRowSm = index >= total - itemsInLastRowSm

  return (
    <div
      className={clsx(
        'flex flex-col py-10 relative group/feature',
        'border-b border-r border-neutral-300',
        'border-r-0',
        index === total - 1 && 'border-b-0',
        'sm:border-r',
        isLastInRowSm && 'sm:border-r-0',
        isLastRowSm && 'sm:border-b-0',
        'lg:border-r',
        isLastInRowLg && 'lg:border-r-0',
        isLastRowLg && 'lg:border-b-0'
      )}
		>
			<div className='opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent pointer-events-none' />
			<div className='mb-4 relative z-10 px-10 max-sm:px-4 text-neutral-600'>
				<Icon />
			</div>
			<div className='text-lg font-bold mb-2 relative z-10 px-10 max-sm:px-4'>
				<div className='absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-black transition-all duration-200 origin-center max-sm:h-4 max-sm:w-0.5' />
				<span className='group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 max-sm:text-sm'>
					{title}
				</span>
			</div>
			<p className='text-sm max-sm:text-xs text-neutral-600 max-w-xs relative z-10 px-10 max-sm:px-4'>
				{description}
			</p>
		</div>
	)
}
