'use client'

import { Typewriter } from 'nextjs-simple-typewriter'
import { Container } from '../container'
import { LockIcon, MenuIcon, PiIcon, Rocket, Wind, XIcon } from 'lucide-react'

export function Hero() {
	return (
		<section className='relative min-h-screen'>
			<Container className='min-h-screen flex flex-col pt-[25vh]'>
				<div>
					<h1 className='text-8xl max-sm:text-3xl font-light'>
						Hi. I build SaaS,
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
					<p className='mt-5 font-medium text-base max-sm:text-xs w-2/3'>
						Premium SaaS solutions that grow revenue and delight users.
					</p>
				</div>
				<div className='pb-10 mt-auto flex items-center gap-4 justify-start w-full'>
					<LockIcon />
					<Wind />
					<Rocket />
				</div>
			</Container>
		</section>
	)
}
