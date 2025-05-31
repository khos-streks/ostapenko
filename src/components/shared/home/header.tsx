import { UserIcon } from 'lucide-react'

export function Header() {
	return (
		<header className='bg-white w-full rounded-2xl shadow-2xl p-8'>
			<div className='flex items-center gap-5'>
				<div className='h-full aspect-square'>
					<UserIcon className='bg-[#e0e0e0] p-4 h-24 w-24 rounded-full' />
				</div>
				<div className='flex flex-col'>
					<h1 className='text-2xl'>Kostiantyn Ostapenko</h1>
					<a
						href='mailto:ostapenkokpersonal@gmail.com'
						className='text-[#949494] hover:text-[#111] transition-colors duration-300'
					>
						ostapenkokpersonal@gmail.com
					</a>
				</div>
			</div>
			<h2 className='mt-5 text-2xl font-bold tracking-wider'>Full Stack Developer</h2>
		</header>
	)
}
