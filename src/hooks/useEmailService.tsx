import { emailService } from '@/services/email.service'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'sonner'

export const useContactService = ({ successCallback }: { successCallback?: () => void }) => {
	return useMutation({
		mutationKey: ['contact'],
		mutationFn: async (data: { email: string; title: string; message: string }) => {
			const res = await emailService.sendContactEmail(data)
			if (!res?.data?.ok) throw new Error(res.data.message)
			return res.data
		},
		onSuccess: () => {
			toast.success('Email sent successfully!')
			successCallback?.()
		},
		onError: (error: AxiosError<{ message: string }>) => {
			toast.error(error.response?.data?.message)
		}
	})
}
