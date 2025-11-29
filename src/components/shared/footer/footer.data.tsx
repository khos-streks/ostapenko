import { LinkedinIcon, MailIcon } from 'lucide-react'
import { ReactNode } from 'react'
import { siInstagram, siTelegram } from 'simple-icons'

export const FOOTER_SOCIAL: { node: () => ReactNode; link: string; label: string }[] = [
	{ node: () => <MailIcon size={20} />, link: 'mailto:kostiantyn@ostapenko.pp.ua', label: 'Mail' },
	{
		node: () => (
			<svg
				width={20}
				height={20}
				viewBox='0 0 24 24'
			>
				<path d={siTelegram.path} />
			</svg>
		),
		link: '#',
		label: 'Telegram'
	},
	{
		node: () => (
			<svg
				width={20}
				height={20}
				viewBox='0 0 24 24'
			>
				<path d={siInstagram.path} />
			</svg>
		),
		link: '#',
		label: 'Instagram'
	},
	{ node: () => <LinkedinIcon size={20} />, link: '#', label: 'LinkedIn' }
]
