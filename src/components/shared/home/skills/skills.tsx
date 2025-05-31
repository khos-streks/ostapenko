import { SKILLS } from './skills.data'

export function Skills() {
	return (
		<section className='bg-white p-8 rounded-xl shadow-2xl'>
			<h2 className='font-bold text-xl mb-6'>Hard Skills</h2>
			<div className='flex flex-col gap-2'>
				{SKILLS.map(skill => (
					<div
						key={skill.name}
						className='flex items-center gap-2 rounded-lg hover:bg-gray-50 transition-colors border p-2 cursor-default'
					>
						<div className='w-6 h-6'>
							<skill.icon />
						</div>
						<span className='font-medium text-gray-700'>{skill.name}</span>
					</div>
				))}
			</div>
		</section>
	)
}
