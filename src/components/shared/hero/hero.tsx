import { Button } from '@/components/ui/button'
import FloatingLines from '../../ui/floating-lines'
import { Container } from '../container'
import { Typewriter } from 'nextjs-simple-typewriter'
import { ArrowDownIcon } from 'lucide-react'

export function Hero() {
	return (
		<section className='relative min-h-screen bg-black'>
			<div className='relative w-min text-nowrap mx-auto z-10 flex flex-col items-center min-h-screen gap-8 justify-center'>
				<h1 className='text-5xl font-black text-center text-white'>
					Building SaaS,
					<br />
					that{' '}
					<Typewriter
						cursor
						loop={Infinity}
						cursorBlinking
						cursorStyle='_'
						delaySpeed={1000}
						typeSpeed={100}
						deleteSpeed={200}
						words={['scales', 'sells', 'delights', 'automates', 'grows', 'performs', 'connects']}
					/>
				</h1>
				<p className='font-medium text-center'>
					Full-cycle development of SaaS platforms and rapid Telegram Mini Apps
					<br /> for startups and businesses.
				</p>
				<div className='flex items-center gap-4'>
					<Button>Contact Us</Button>
					<Button variant='secondary'>Learn more</Button>
				</div>
				<div className='flex flex-col items-center gap-1  text-sm text-white/50 tracking-widest absolute bottom-6 animate-pulse'>
					<div className='flex items-center'>
						<ArrowDownIcon />
						<ArrowDownIcon className='-ml-2' />
					</div>{' '}
					Scroll down
				</div>
			</div>
			<div className='absolute w-full h-full inset-0'>
				<FloatingLines
					enabledWaves={['top', 'middle', 'bottom']}
					lineCount={3}
					lineDistance={50}
					bendRadius={5.0}
					bendStrength={-0.1}
					interactive
					parallax
				/>
			</div>
		</section>
	)
}
