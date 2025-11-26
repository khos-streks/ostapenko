'use client'

import { Typewriter } from 'nextjs-simple-typewriter'
import { Container } from '../container'
import Waves from '@/components/ui/waves'
import { Button } from '@/components/ui/button'

export function Hero() {
	return (
		<section className='relative min-h-screen w-full h-full'>
			<div className='absolute w-full h-full inset-0 -z-10 pointer-events-none'>
				<Waves
					lineColor='#0000000d'
					backgroundColor='rgba(255, 255, 255, 0.2)'
					waveSpeedX={0.02}
					waveSpeedY={0.01}
					waveAmpX={40}
					waveAmpY={20}
					friction={0.9}
					tension={0.05}
					maxCursorMove={0}
					xGap={12}
					yGap={36}
				/>
			</div>
			<Container className='min-h-screen grid grid-rows-[1.5fr_2fr_1fr]'>
				<div />
				<div className='w-full'>
					<h1 className='text-[clamp(2.5rem,6.5vw,4rem)] leading-[1] text-center mx-auto'>
						Hi. I craft SaaS,
						<br />
						that{' '}
						<Typewriter
							cursor
							cursorBlinking
							cursorStyle='_'
							loop={Infinity}
							delaySpeed={1000}
							typeSpeed={100}
							deleteSpeed={200}
							words={['scales.', 'delights.', 'automates.', 'grows.']}
						/>
					</h1>
					<p className='mt-5 font-medium text-base text-center mx-auto max-sm:text-xs w-2/3 max-sm:w-full'>
						Full-cycle development of premium SaaS solutions and rapid Telegram Mini Apps{' '}
						<br className='max-sm:hidden' />
						that grow revenue and delight users.
					</p>
					<div className='w-full flex items-center justify-center gap-4 mt-10 max-sm:grid max-sm:grid-cols-2'>
						<Button className='max-sm:px-0 max-sm:w-full max-sm:text-xs'>Discuss product</Button>
						<Button className='max-sm:px-0 max-sm:w-full max-sm:text-xs' variant='secondary'>Learn more</Button>
					</div>
				</div>
				<div className='pb-10 mt-auto w-full'>
					<h2 className='text-[clamp(1rem,6.5vw,2rem)] opacity-10 max-sm:opacity-20 text-center text-black'>
						Reliable. Predictable. Strong.
					</h2>
				</div>
			</Container>
		</section>
	)
}
