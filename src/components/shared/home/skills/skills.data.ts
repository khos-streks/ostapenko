import {
	ExpressIcon,
	GitIcon,
	GithubIcon,
	JavascriptIcon,
	NestjsIcon,
	NextjsIcon,
	NodejsIcon,
	PostgresqlIcon,
	ReactIcon,
	TailwindIcon,
	TypeScriptIcon
} from '@/components/icons'
import { ISkill } from './skills.types'

export const SKILLS: ISkill[] = [
	{
		name: 'TypeScript',
		icon: TypeScriptIcon
	},
	{
		name: 'JavaScript',
		icon: JavascriptIcon
	},
	{
		name: 'React',
		icon: ReactIcon
	},
	{
		name: 'Next.js',
		icon: NextjsIcon
	},
	{
		name: 'Node.js',
		icon: NodejsIcon
	},
	{
		name: 'Express',
		icon: ExpressIcon
	},
	{
		name: 'Nest.js',
		icon: NestjsIcon
	},
	{
		name: 'PostgreSQL',
		icon: PostgresqlIcon
	},
	{
		name: 'Tailwind CSS',
		icon: TailwindIcon
	},
	{
		name: 'Git',
		icon: GitIcon
	},
	{
		name: 'GitHub',
		icon: GithubIcon
	}
]
