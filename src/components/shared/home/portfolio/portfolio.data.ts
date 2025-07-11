import { toast } from 'sonner'
import { IPortfolioItem } from './portfolio.types'

export const PORTFOLIO: IPortfolioItem[] = [
	{
		title: 'MHP Logistics Budgeting',
		description:
			'<span style="color: #ff0000;">Private project. Demo available upon request (non-public, NDA-protected).</span> Built a high-impact single-screen budgeting dashboard for MHP Logistics, featuring AI-assisted insights, variance analysis, pivot tables, and real-time financial summaries.',
		image: '/projects/budgeting.png',
		highlighted: true,
		onClick: () => {
			toast.error('Private project. Demo available upon request (non-public, NDA-protected).', {
				position: 'top-center'
			})
		}
	},
	{
		title: 'Charm AI',
		description:
			'Charm AI is a SaaS application designed to generate responses for chat conversations, including AI-driven pickup lines and conversation starters.',
		image: '/projects/charm-ai.jpg',
		link: 'https://charm-ai.io'
	},
	{
		title: 'Lumineka',
		description:
			'Lumineka is an online store specializing in a wide range of high-quality lighting products.',
		image: '/projects/lumineka.jpg',
		link: 'https://lumineka.com.ua'
	},
	{
		title: 'Light 2U',
		description:
			'Light 2U is an online store specializing in premium lighting solutions, offering a wide variety of light fixtures for both residential and commercial spaces.',
		image: '/projects/light-2u.avif',
		link: 'https://light2u.com.ua'
	},
	{
		title: 'UAre Connected',
		description:
			'UAre Connected is an award-winning app that allows users to connect with each other and find new friends. AI-powered matching system. Developed in 12 hours on nationwide hackathon: "Українська IT-Сотня".',
		image: '/projects/uare-connected.avif',
		link: 'https://uare-connected.vercel.app/'
	},
	{
		title: 'Fabriq',
		description:
			'Fabriq is an online store specializing in high-quality statues and sculptures, offering a wide range of art pieces for collectors, decorators, and art enthusiasts.',
		image: '/projects/fabriq.avif',
		link: 'https://fabriq.com.pl'
	},
	{
		title: 'Bluetongue',
		description:
			'Bluetongue is a SaaS platform designed to provide a seamless and interactive experience for reading digital books.',
		image: '/projects/bluetongue.jpg',
		link: 'https://bluetongue.com.ua'
	},
	{
		title: 'Ulethai',
		description:
			'Ulethai is a Thai company that provides car rental services. The site includes filters, car search, booking and much more',
		image: '/projects/ulethai.avif',
		link: 'https://ulethai.com'
	},
	{
		title: 'My IQ Rank',
		description:
			'My IQ Rank is an online platform dedicated to providing IQ testing services. The website offers users the opportunity to take scientifically designed IQ tests to measure their cognitive abilities.',
		image: '/projects/my-iq-rank.jpg',
		link: 'https://myiqrank.com'
	}
]
