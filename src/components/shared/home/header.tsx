import clsx from 'clsx'

export function Header({ className }: { className?: string }) {
	return (
		<header className={clsx('bg-white w-full rounded-2xl shadow-2xl p-8 max-sm:p-4', className)}>
			<div className='flex items-center gap-5 max-[420px]:gap-2 max-[420px]:flex-col'>
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
