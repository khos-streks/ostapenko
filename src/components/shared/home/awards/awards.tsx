import clsx from 'clsx'

export function Awards({ className }: { className?: string }) {
	return (
		<div className={clsx('flex flex-col gap-8 w-full', className)}>
			<div className='bg-white w-full rounded-2xl shadow-2xl p-8 max-sm:p-4'>
				<div className='flex items-center gap-3 mb-5'>
					<h2 className='text-xl font-bold'>Awards & Certifications</h2>
				</div>
				<div className='flex flex-col gap-5'>
					<div>
						<h3 className='font-semibold'>Education Grant</h3>
						<p className='text-sm text-[#949494]'>
							Received for academic excellence and innovation
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
