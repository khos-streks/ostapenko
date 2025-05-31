import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/api/contact-me', '/api/send-review']
			}
		],
		sitemap: 'https://ostapenko-pp.ua/sitemap.xml'
	}
}
