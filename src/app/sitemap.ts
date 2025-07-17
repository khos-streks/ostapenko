import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [{ url: 'https://ostapenko-pp.ua/', lastModified: new Date() }]
}
