'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Particles from '@/components/ui/particles'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export function Preloader() {
	const [isOpen, setIsOpen] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => setIsOpen(false), 2500)
		return () => {
			clearTimeout(timer)
		}
	}, [])

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div className='fixed inset-0 z-[1000]'>
					<motion.div
						className='absolute inset-0 bg-[#eee]'
						style={{
							clipPath: 'polygon(0 0, 100% 0, 0 100%)'
						}}
						initial={{ x: 0, y: 0, scale: 1 }}
						exit={{ x: '-100%', y: '-100%', scale: 0.8 }}
						transition={{ duration: 2, ease: 'easeInOut' }}
					/>

					<motion.div
						className='absolute inset-0 bg-[#eee]'
						style={{
							clipPath: 'polygon(100% 100%, 0 100%, 100% 0)'
						}}
						initial={{ x: 0, y: 0, scale: 1 }}
						exit={{ x: '100%', y: '100%', scale: 0.8 }}
						transition={{ duration: 2, ease: 'easeInOut' }}
					/>

					<motion.div
						initial={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5, ease: 'easeInOut' }}
						className='absolute inset-0 w-full h-full flex items-center justify-center'
					>
						<div className='relative w-[600px] mx-auto z-[999] opacity-10'>
							<DotLottieReact
								src='https://lottie.host/1ab03e11-78f0-4fd7-8581-5ced4809780c/6TzOfBg5jT.lottie'
								autoplay
							/>
						</div>
						<div className='absolute inset-0 w-full h-full z-[998]'>
							<Particles
								particleColors={['#eee', '#eee']}
								particleCount={200}
								particleSpread={10}
								speed={0.1}
								particleBaseSize={100}
								moveParticlesOnHover={true}
								alphaParticles={false}
								disableRotation={false}
							/>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
