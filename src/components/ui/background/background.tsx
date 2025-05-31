'use client'

import Particles, { initParticlesEngine } from '@tsparticles/react'
import { useEffect, useState } from 'react'
import { options } from './background.options'
import { loadSlim } from '@tsparticles/slim'

export function Background() {
	const [init, setInit] = useState<boolean>(false)

	useEffect(() => {
		initParticlesEngine(async engine => {
			await loadSlim(engine)
		}).then(() => {
			setInit(true)
		})
	}, [])

	return (
		init && (
			<Particles
				className='absolute -z-10 w-full h-full top-0 left-0 inset-0'
				options={options}
			/>
		)
	)
}
