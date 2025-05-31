import { emailService } from '@/services/email.service'
import { useMutation } from '@tanstack/react-query'

export const useContactService = () => {
	return useMutation({
		mutationKey: ['contact'],
		mutationFn: async (data: {
			companyName: string
			email: string
			title: string
			message: string
		}) => {
			const res = (await emailService.sendContactEmail(data)).data
			if (!res) throw new Error()
			return res
		}
	})
}

export const useSendReviewService = () => {
	return useMutation({
		mutationKey: ['sendReview'],
		mutationFn: async (data: { companyName: string; rating: number; message: string }) => {
			const res = (await emailService.sendReview(data)).data
			if (!res) throw new Error()
			return res
		}
	})
}
