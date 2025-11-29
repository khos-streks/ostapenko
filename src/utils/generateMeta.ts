import { Metadata } from 'next'

export async function generateMeta({
	title,
	description
}: {
	title?: string
	description?: string
}) {
	const generated: Metadata = {
		title,
		description,
		openGraph: {
			title,
			description,
			images: [
				{
					url: 'https://ostapenko.pp.ua/opengraph.png',
					width: 1200,
					height: 630,
					alt: 'Preview image'
				}
			]
		}
	}
	return generated
}
