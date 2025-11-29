'use client'

import clsx from 'clsx'
import dynamic from 'next/dynamic'
import { useId } from 'react'

function Component({
	grid,
	gridCols = 4
}: {
	grid: { title?: string; description?: string }[]
	gridCols?: number
}) {
	const gridColsClass =
		{
			1: 'lg:grid-cols-1',
			2: 'lg:grid-cols-2',
			3: 'lg:grid-cols-3',
			4: 'lg:grid-cols-4',
			5: 'lg:grid-cols-5',
			6: 'lg:grid-cols-6'
		}[gridCols] || 'lg:grid-cols-4'

	return (
		<div>
			<div
				className={clsx(
					'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-2',
					gridColsClass
				)}
			>
				{grid.map(feature => (
					<div
						key={feature.title}
						className='relative bg-gradient-to-b from-neutral-100 to-white p-6 rounded-3xl overflow-hidden'
					>
						<Grid size={20} />
						<p className='text-base font-bold text-neutral-800 relative z-20'>{feature.title}</p>
						<p className='text-neutral-600 mt-4 text-base font-normal relative z-20'>
							{feature.description}
						</p>
					</div>
				))}
			</div>
		</div>
	)
}

export const Grid = ({ pattern, size }: { pattern?: number[][]; size?: number }) => {
	const p = pattern ?? [
		[Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
		[Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
		[Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
		[Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
		[Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1]
	]
	return (
		<div className='pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]'>
			<div className='absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]  from-zinc-100/30 to-zinc-300/30 opacity-100'>
				<GridPattern
					width={size ?? 20}
					height={size ?? 20}
					x='-12'
					y='4'
					squares={p}
					className='absolute inset-0 h-full w-full mix-blend-overlay stroke-black/10 fill-black/10'
				/>
			</div>
		</div>
	)
}

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
	const patternId = useId()

	return (
		<svg
			aria-hidden='true'
			{...props}
		>
			<defs>
				<pattern
					id={patternId}
					width={width}
					height={height}
					patternUnits='userSpaceOnUse'
					x={x}
					y={y}
				>
					<path
						d={`M.5 ${height}V.5H${width}`}
						fill='none'
					/>
				</pattern>
			</defs>
			<rect
				width='100%'
				height='100%'
				strokeWidth={0}
				fill={`url(#${patternId})`}
			/>
			{squares && (
				<svg
					x={x}
					y={y}
					className='overflow-visible'
				>
					{squares.map(([x, y]: any) => (
						<rect
							strokeWidth='0'
							key={Math.random()}
							width={width + 1}
							height={height + 1}
							x={x * width}
							y={y * height}
						/>
					))}
				</svg>
			)}
		</svg>
	)
}

export const FeaturesSectionWithCardGradient = dynamic(() => Promise.resolve(Component), {
	ssr: false
})
