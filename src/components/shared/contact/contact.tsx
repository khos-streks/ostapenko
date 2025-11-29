'use client'

import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import { useContactService } from '@/hooks/useEmailService'
import { LoaderIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { JSX, useState } from 'react'
import { useForm } from 'react-hook-form'

export function ContactUs({
	trigger,
	source = 'default'
}: {
	trigger: JSX.Element
	source?: 'header' | 'footer' | 'hero' | 'cta' | 'default'
}) {
	const pathname = usePathname()
	const { register, handleSubmit, reset } = useForm<{
		email: string
		phone: string
		companyName: string
		source: 'header' | 'footer' | 'hero' | 'cta' | 'default'
		pathname: string
		message?: string
	}>()

	const [showSuccess, setShowSuccess] = useState(false)

	const { mutateAsync: contactUs, isPending } = useContactService({
		successCallback: () => {
			reset()
			setShowSuccess(true)
		}
	})

	return (
		<Dialog
			title={"Let's talk!"}
			trigger={trigger}
		>
			<form
				onSubmit={handleSubmit(async data => {
					try {
						data.source = source
						data.pathname = pathname
						await contactUs(data)
					} catch {}
				})}
				className='w-[350px] flex items-center mx-auto max-lg:w-full flex-col gap-5 py-10 [&_input]:w-full [&_input]:h-[50px] [&_input]:border [&_input]:border-black/40 [&_input]:rounded-3xl [&_input]:placeholder-black/60 [&_input]:text-sm [&_input]:px-6 [&_input]:py-3'
			>
				<input
					{...register('companyName')}
					type='text'
					required
					placeholder={'Company Name'}
				/>
				<input
					type='email'
					{...register('email')}
					required
					placeholder={'Email'}
				/>
				<input
					type='tel'
					required
					{...register('phone')}
					placeholder={'Phone'}
				/>
				<textarea
					className='w-full border border-black/40 rounded-3xl placeholder-black/60 text-sm px-6 py-3 max-h-[200px]'
					{...register('message')}
					placeholder={'Message (optional)'}
					rows={4}
					onInput={e => {
						const target = e.target as HTMLTextAreaElement
						target.style.height = 'auto'
						target.style.height = target.scrollHeight + 'px'
					}}
				/>
				<Button
					disabled={isPending}
					className='mt-4 w-[200px] flex items-center gap-2 justify-center disabled:opacity-35'
				>
					{isPending && (
						<LoaderIcon
							size={16}
							className='animate-spin'
						/>
					)}
					Send
				</Button>
			</form>
			{showSuccess && (
				<div
					onClick={() => setShowSuccess(false)}
					className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm'
				>
					<div className='bg-white rounded-3xl p-10 shadow-2xl text-center max-w-md mx-auto flex flex-col items-center'>
						<h2 className='text-2xl font-bold mb-4 text-black'>Thank you!</h2>
						<p className='text-lg text-black mb-6'>
							Your message has been sent successfully. I will contact you soon.
						</p>
						<Button
							className='w-full'
							onClick={() => setShowSuccess(false)}
						>
							Close
						</Button>
					</div>
				</div>
			)}
		</Dialog>
	)
}
