import {
	LayersIcon,
	Link2Icon,
	MonitorIcon,
	CloudLightningIcon,
	BarChart2Icon,
	DollarSignIcon
} from 'lucide-react'

export const SERVICES = [
	{
		title: 'End-to-End SaaS Development',
		description:
			'From ideation to deployment, we handle the full lifecycle of building a robust SaaS product.',
		icon: LayersIcon
	},
	{
		title: 'Payments Integration',
		description:
			'Seamlessly integrate secure payment gateways and subscription management into your SaaS.',
		icon: DollarSignIcon
	},
	{
		title: 'API & Integrations',
		description:
			'Building flexible APIs and integrating with third-party services for seamless workflows.',
		icon: Link2Icon
	},
	{
		title: 'UI/UX Design for SaaS',
		description:
			'Crafting intuitive and polished interfaces that enhance productivity and user satisfaction.',
		icon: MonitorIcon
	},
	{
		title: 'Cloud & DevOps',
		description:
			'Ensuring high availability, performance, and smooth continuous delivery of your SaaS.',
		icon: CloudLightningIcon
	},
	{
		title: 'Analytics & Reporting',
		description:
			'Implementing tracking, dashboards, and insights to monitor product usage and performance.',
		icon: BarChart2Icon
	}
]
