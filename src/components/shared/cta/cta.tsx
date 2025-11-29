import clsx from 'clsx'
import { Container } from '../container'
import { Button } from '@/components/ui/button'
import Waves from '@/components/ui/waves'
import { ContactUs } from '../contact/contact'

export function Cta() {
	return (
		<section className='pt-[50px] pb-[50px] max-sm:py-10'>
			<Container>
				<div
					className={clsx(
						'rounded-3xl relative py-20 px-16 max-sm:pt-10 max-sm:pb-[40px] max-sm:px-6 w-2/3 mx-auto max-lg:w-3/4 max-md:w-full'
					)}
					style={{ border: '1px solid #13309129' }}
				>
					<div className='absolute w-full h-full inset-0 -z-10 pointer-events-none'>
						<Waves
							lineColor='#00000005'
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
					<div className='mx-auto text-center'>
						<h2 className='text-3xl max-sm:text-xl mx-auto'>Let’s Build Something Together</h2>
						<p className='text-[#0F2252A6] mt-4 max-sm:text-sm'>
							I’m open for new projects. If you’re looking for a reliable engineer who delivers fast
							and clean results — let’s talk.
						</p>
						<ContactUs
							source='cta'
							trigger={
								<Button
									type='button'
									className='mt-8 max-sm:mt-5 max-sm:py-1.5 max-sm:px-6 mx-auto whitespace-nowrap shrink-0'
								>
									Contact Me
								</Button>
							}
						/>
					</div>
				</div>
			</Container>
		</section>
	)
}
