import { Button } from '@/components/ui/button'
import { Typewriter } from 'nextjs-simple-typewriter'
import { ArrowDownIcon } from 'lucide-react'
import Galaxy from '../../ui/galaxy'

export function Hero() {
	return (
		<section className='relative min-h-screen bg-black'>
			<div className='relative w-min max-sm:w-full max-sm:text-wrap text-nowrap mx-auto z-10 flex flex-col items-center min-h-screen gap-8 justify-center max-sm:px-3'>
				<h1 className='text-5xl font-black text-center text-white max-sm:text-3xl'>
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
				<p className='font-medium text-center max-sm:text-sm'>
					Full-cycle development of SaaS platforms and rapid Telegram Mini Apps
					<br className='max-sm:hidden' /> for startups and businesses.
				</p>
				<div className='flex items-center gap-4 max-[350px]:grid max-[350px]:grid-cols-2 max-[350px]:gap-2 max-[350px]:w-full'>
					<Button className='max-sm:text-xs max-[350px]:px-0 max-[350px]:w-full'>Discuss product</Button>
					<Button
						className='max-sm:text-xs max-[350px]:px-0 max-[350px]:w-full'
						variant='secondary'
					>
						Learn more
					</Button>
				</div>
				<div className='flex flex-col items-center gap-1  text-sm text-white/50 tracking-widest absolute bottom-6 animate-pulse max-sm:text-xs'>
					<div className='flex items-center max-sm:scale-90'>
						<ArrowDownIcon />
						<ArrowDownIcon className='-ml-2' />
					</div>{' '}
					Scroll down
				</div>
			</div>
			<div className='absolute w-full h-full inset-0'>
				<Galaxy
					mouseRepulsion={true}
					density={1}
					glowIntensity={0.1}
					saturation={0.3}
					hueShift={240}
				/>
			</div>
		</section>
	)
}
