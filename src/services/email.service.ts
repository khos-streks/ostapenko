import { api } from '@/lib/axios'

class EmailService {
	async sendContactEmail(data: {
		email: string
		phone: string
		companyName: string
		source: 'header' | 'footer' | 'hero' | 'cta' | 'default'
		pathname: string
		message?: string
	}) {
		return await api.post<{ ok: boolean; message?: string }>('/contact-me', data)
	}
}

export const emailService = new EmailService()
