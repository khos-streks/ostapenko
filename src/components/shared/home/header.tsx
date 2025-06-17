import clsx from 'clsx'
import { UserIcon } from 'lucide-react'
import Image from 'next/image'

export function Header({ className }: { className?: string }) {
	return (
		<header className={clsx('bg-white w-full rounded-2xl shadow-2xl p-8 max-sm:p-4', className)}>
			<div className='flex items-center gap-5 max-[420px]:gap-2 max-[420px]:flex-col'>
				<div className='h-full aspect-square overflow-hidden rounded-full'>
					{/* <Image
						src='/avatar.avif'
						alt='Kostiantyn Ostapenko'
						width={100}
						height={100}
						className='aspect-square object-cover object-[15%_10%] rounded-full scale-[2.5]'
					/> */}
					<UserIcon className='bg-[#e0e0e0] p-4 h-24 w-24 max-sm:h-20 max-sm:w-20 rounded-full' />
				</div>
				<div className='flex flex-col'>
					<h1 className='text-2xl max-sm:text-xl'>Kostiantyn Ostapenko</h1>
					<a
						href='mailto:ostapenkokpersonal@gmail.com'
						className='text-[#949494] hover:text-[#111] transition-colors duration-300 max-sm:text-sm'
					>
						ostapenkokpersonal@gmail.com
					</a>
				</div>
			</div>
			<h2 className='mt-5 text-2xl font-bold tracking-wide max-sm:text-xl max-[420px]:text-center max-[420px]:text-base'>
				Full Stack Developer
			</h2>
		</header>
	)
}
