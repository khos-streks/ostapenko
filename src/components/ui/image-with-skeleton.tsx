'use client'

import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

interface ImageWithSkeletonProps extends Omit<ImageProps, 'onLoadingComplete'> {
	containerClassName?: string
	skeletonClassName?: string
}

export function ImageWithSkeleton({
	containerClassName,
	skeletonClassName,
	alt,
	...props
}: ImageWithSkeletonProps) {
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(false)

	return (
		<div
			className={clsx('relative overflow-hidden', containerClassName)}
			style={{ width: props.width, height: props.height }}
		>
			{!error && props.src ? (
				<Image
					className={clsx(
						'absolute inset-0 w-full h-auto transition-opacity duration-300 object-contain',
						isLoading ? 'opacity-0' : 'opacity-100'
					)}
					alt={alt}
					onLoad={() => setIsLoading(false)}
					onError={() => setError(true)}
					{...props}
				/>
			) : (
				<div
					className={clsx(
						'absolute inset-0 w-full h-auto transition-opacity duration-300',
						isLoading || error ? 'opacity-100' : 'opacity-0',
						skeletonClassName ?? 'bg-neutral-100 animate-pulse'
					)}
				/>
			)}
		</div>
	)
}
