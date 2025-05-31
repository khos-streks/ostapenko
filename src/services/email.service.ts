import { api } from '@/lib/axios'

class EmailService {
	async sendContactEmail(data: {
		title: string
		companyName: string
		email: string
		message: string
	}) {
		return await api.post<{ ok: boolean }>('/contact-me', data)
	}

	async sendReview(data: { companyName: string; rating: number; message: string }) {
		return await api.post<{ ok: boolean }>('/send-review', data)
	}
}

export const emailService = new EmailService()
