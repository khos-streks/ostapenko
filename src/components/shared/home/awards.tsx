'use client'

import { ImageWithSkeleton } from '@/components/ui/image-with-skeleton'
import clsx from 'clsx'
import { Award } from 'lucide-react'
import { useState } from 'react'
import { AWARDS } from './awards/awards.data'
// Import the yet-another-react-lightbox library components
// You'll need to install this library with: npm install yet-another-react-lightbox
import Lightbox from 'yet-another-react-lightbox'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import 'yet-another-react-lightbox/plugins/counter.css'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'

export function Awards({ className }: { className?: string }) {
	const [open, setOpen] = useState(false)
	const [imageIndex, setImageIndex] = useState(0)

	const openLightbox = (index: number) => {
		setImageIndex(index)
		setOpen(true)
	}

	return (
		<div className={clsx('flex flex-col gap-8 w-full', className)}>
			<div className='bg-white w-full rounded-2xl shadow-2xl p-8 max-sm:p-4'>
				<div className='flex items-center gap-3 mb-5'>
					<Award className='h-7 w-7' />
					<h2 className='text-xl font-bold'>Awards & Certifications</h2>
				</div>
				<div className='flex flex-col gap-8'>
					{AWARDS.map((award, index) => (
						<div
							key={index}
							className='flex flex-col gap-3 items-center'
						>
							<div
								className='relative h-40 w-full overflow-hidden rounded-md cursor-pointer group'
								onClick={() => openLightbox(index)}
							>
								<img
									src={award.image ?? '/certificate-placeholder.avif'}
									alt={award.title}
									className='object-cover w-full h-full'
									width={600}
									height={200}
								/>
								<div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center'>
									<span className='text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium'>
										Click to view
									</span>
								</div>
							</div>
							<div className='text-center w-full'>
								<h3 className='font-semibold text-lg'>{award.title}</h3>
								<p className='text-sm text-[#949494] mt-1'>{award.description}</p>
								{(award.date || award.issuer) && (
									<p className='text-xs text-[#949494] mt-1'>
										{award.date && <span>{award.date}</span>}
										{award.date && award.issuer && <span> • </span>}
										{award.issuer && <span>{award.issuer}</span>}
									</p>
								)}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Lightbox component */}
			<Lightbox
				open={open}
				close={() => setOpen(false)}
				index={imageIndex}
				slides={AWARDS.map(award => ({
					src: award.image ?? '/certificate-placeholder.avif',
					alt: award.title
				}))}
				plugins={[Zoom, Counter]}
			/>
		</div>
	)
}
