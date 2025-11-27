'use client'

import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

const PlusCard: React.FC<{
	className?: string
	title: string
	description: string
}> = ({ className = '', title, description }) => {
	return (
		<div
			className={clsx(
				'relative border border-dashed border-zinc-400 rounded-lg p-6 bg-zinc-50 min-h-[200px]',
				'flex flex-col justify-between',
				className
			)}
		>
			<CornerPlusIcons />
			<div className='relative z-10 space-y-2'>
				<h3 className='text-xl font-bold text-gray-900 max-sm:text-base'>{title}</h3>
				<p className='text-gray-700 max-sm:text-sm'>{description}</p>
			</div>
		</div>
	)
}

const CornerPlusIcons = () => (
	<>
		<PlusIcon className='absolute -top-3 -left-3 max-sm:scale-75' />
		<PlusIcon className='absolute -top-3 -right-3 max-sm:scale-75' />
		<PlusIcon className='absolute -bottom-3 -left-3 max-sm:scale-75' />
		<PlusIcon className='absolute -bottom-3 -right-3 max-sm:scale-75' />
	</>
)

const PlusIcon = ({ className }: { className?: string }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		width={24}
		height={24}
		strokeWidth='1'
		stroke='currentColor'
		className={`text-black size-6 ${className}`}
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M12 6v12m6-6H6'
		/>
	</svg>
)

export default function RuixenBentoCards({
	cards
}: {
	cards: { title: string; description: string }[]
}) {
	return (
		<section>
			<div className='py-12'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-4'>
					<PlusCard
						{...cards[0]}
						className='lg:col-span-3 lg:row-span-2'
					/>
					<PlusCard
						{...cards[1]}
						className='lg:col-span-3 lg:row-span-2'
					/>
					<PlusCard
						{...cards[2]}
						className='lg:col-span-4 lg:row-span-1'
					/>
					<PlusCard
						{...cards[3]}
						className='lg:col-span-2 lg:row-span-1'
					/>
					<PlusCard
						{...cards[4]}
						className='lg:col-span-2 lg:row-span-1'
					/>
					<PlusCard
						{...cards[5]}
						className='lg:col-span-4 lg:row-span-1'
					/>
				</div>
			</div>
		</section>
	)
}
