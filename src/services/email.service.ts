import { api } from '@/lib/axios'

class EmailService {
	async sendContactEmail(data: { title: string; email: string; message: string }) {
		return await api.post<{ ok: boolean; message?: string }>('/contact-me', data)
	}
}

export const emailService = new EmailService()
