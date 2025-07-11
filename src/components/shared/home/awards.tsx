'use client'

import clsx from 'clsx'
import { Award } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'
import { AWARDS } from './awards/awards.data'

export function Awards({ className }: { className?: string }) {
	const [lightboxIndex, setLightboxIndex] = useState(-1)
	const [isLightboxOpen, setIsLightboxOpen] = useState(false)

	const closeLightbox = () => {
		setIsLightboxOpen(false)
	}

	const openLightbox = (index: number) => {
		setLightboxIndex(index)
		setIsLightboxOpen(true)
	}

	return (
		<>
			<div className={clsx('flex flex-col gap-8 w-full', className)}>
				<div className='bg-white w-full rounded-2xl shadow-2xl p-8 max-sm:p-4'>
					<div className='flex items-center gap-3 mb-5'>
						<Award className='h-7 w-7' />
						<h2 className='text-xl font-bold'>Awards & Certifications</h2>
					</div>
					<div className='flex flex-col gap-5'>
						{AWARDS.map((award, index) => (
							<div
								key={index}
								className='flex gap-5 items-center max-sm:flex-col max-sm:items-start'
							>
								<div
									className='relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-md cursor-zoom-in hover:opacity-90 transition-all duration-300 group max-sm:w-full max-sm:h-48'
									onClick={() => openLightbox(index)}
								>
									<div className='absolute inset-0 bg-black/20 z-10' />
									<Image
										src={award.image}
										alt={award.title}
										fill
										className='object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 object-[50%_0%]'
									/>
								</div>
								<div>
									<h3 className='font-semibold'>{award.title}</h3>
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
			</div>

			<Lightbox
				open={isLightboxOpen}
				close={closeLightbox}
				index={lightboxIndex}
				slides={AWARDS.map(award => ({ src: award.image, alt: award.title }))}
				plugins={[Zoom]}
				controller={{ closeOnBackdropClick: true }}
			/>

			<style
				jsx
				global
			>{`
				@keyframes cursorLoopIn {
					0% {
						box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0.1);
					}
					50% {
						box-shadow: inset 0 0 0 15px rgba(0, 0, 0, 0);
					}
					100% {
						box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0.1);
					}
				}

				.cursor-loop-in {
					animation: cursorLoopIn 2s ease-in-out infinite;
					pointer-events: none;
				}
			`}</style>
		</>
	)
}
