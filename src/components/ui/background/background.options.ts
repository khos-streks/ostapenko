import { COLORS } from '@/constants/colors'
import { ISourceOptions } from '@tsparticles/engine'

export const options: ISourceOptions = {
	background: {
		color: COLORS.bg
	},
	fpsLimit: 120,
	interactivity: {
		events: {
			onHover: { enable: true, mode: 'push' }
		},
		modes: {
			push: { quantity: 5 }
		}
	},
	particles: {
		color: { value: COLORS.bg },
		collisions: {
			enable: true,
			maxSpeed: 20
		},
		links: {
			color: COLORS.foreground,
			distance: 200,
			enable: true,
			opacity: 0.4,
			width: 0.7
		},
		move: {
			direction: 'none',
			enable: true,
			outModes: { default: 'bounce' },
			random: false,
			speed: 0.5,
			straight: false
		},
		number: {
			density: { enable: true },
			value: 200
		},
		opacity: {
			value: { min: 0.1, max: 0.5 },
			animation: {
				enable: true,
				speed: 1
			}
		},
		shape: {
			type: 'circle'
		},
		size: {
			value: { min: 0.5, max: 1 }
		}
	},
	resize: true,
	detectRetina: true
}
