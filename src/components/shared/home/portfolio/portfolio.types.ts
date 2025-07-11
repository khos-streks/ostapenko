export interface IPortfolioItem {
	image: string
	title: string
	description: string
	link?: string
	onClick?: () => void
	highlighted?: boolean
}
