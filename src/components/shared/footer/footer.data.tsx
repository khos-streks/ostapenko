import { LinkedinIcon, MailIcon } from 'lucide-react'
import { ReactNode } from 'react'
import { siGithub, siTelegram } from 'simple-icons'

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
		link: 'https://t.me/khos_streks',
		label: 'Telegram'
	},
	{
		node: () => (
			<svg
				width={20}
				height={20}
				viewBox='0 0 24 24'
			>
				<path d={siGithub.path} />
			</svg>
		),
		link: 'https://github.com/khos-streks',
		label: 'Github'
	},
	{
		node: () => <LinkedinIcon size={20} />,
		link: 'https://www.linkedin.com/in/kostiantyn-ostapenko-a35177335',
		label: 'LinkedIn'
	}
]
