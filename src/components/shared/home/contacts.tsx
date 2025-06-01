'use client'

import { useContactService } from '@/hooks/useEmailService'
import clsx from 'clsx'
import { LoaderIcon, MailIcon, MessageSquare, PencilIcon, SendIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'

interface Form {
	email: string
	title: string
	message: string
}

export function Contacts() {
	const { register, handleSubmit, formState, reset } = useForm<Form>()
	const { errors } = formState
	const { mutateAsync, isPending } = useContactService({
		successCallback: () => reset()
	})

	const sendEmail = async (data: Form) => {
		try {
			await mutateAsync(data)
		} catch {}
	}

	return (
		<section className='bg-white p-8 max-sm:p-4 rounded-xl shadow-2xl mt-8'>
			<h2 className='font-bold text-xl mb-8 max-sm:mb-4'>Contact</h2>
			<form
				className='flex flex-col gap-4'
				onSubmit={handleSubmit(data => sendEmail(data))}
			>
				<div className='flex flex-col gap-2'>
					<label
						htmlFor='contacts-email'
						className='flex items-center gap-2 font-medium'
					>
						<MailIcon className='w-5 h-5' /> Email
					</label>
					<input
						id='contacts-email'
						type='email'
						placeholder='example@example.com'
						className={clsx('border p-2 rounded-md focus:outline-none transition-all', {
							'!border-red-500': errors.email
						})}
						{...register('email', {
							required: { value: true, message: 'Email must not be empty' }
						})}
					/>
					{errors.email && (
						<p className='text-red-500 font-medium text-sm'>{errors.email.message}</p>
					)}
				</div>

				<div className='flex flex-col gap-2'>
					<label
						htmlFor='contacts-title'
						className='flex items-center gap-2 font-medium'
					>
						<PencilIcon className='w-5 h-5' /> Title
					</label>
					<input
						id='contacts-title'
						type='title'
						placeholder='Enter title...'
						className={clsx(
							'border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-700 transition-all',
							{
								'!border-red-500': errors.title
							}
						)}
						{...register('title', {
							required: { value: true, message: 'Title must not be empty' }
						})}
					/>
					{errors.title && (
						<p className='text-red-500 font-medium text-sm'>{errors.title.message}</p>
					)}
				</div>

				<div className='flex flex-col gap-2'>
					<label
						htmlFor='contacts-message'
						className='flex items-center gap-2 font-medium'
					>
						<MessageSquare className='w-5 h-5' /> Message
					</label>
					<textarea
						id='contacts-message'
						placeholder='Your message here...'
						className={clsx(
							'border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-700 transition-all',
							{
								'!border-red-500': errors.message
							}
						)}
						{...register('message', {
							required: { value: true, message: 'Message must not be empty' },
							minLength: { value: 20, message: 'Message must be at least 20 characters long' }
						})}
					/>
					{errors.message && (
						<p className='text-red-500 font-medium text-sm'>{errors.message.message}</p>
					)}
				</div>

				<button
					disabled={isPending}
					type='submit'
					className='mt-2 bg-black text-white px-4 py-2 rounded-md hover:bg-neutral-900 transition-colors flex items-center gap-2 justify-center font-medium disabled:bg-neutral-600 disabled:cursor-not-allowed'
				>
					{isPending ? (
						<>
							<LoaderIcon className='w-5 h-5 animate-spin' />
							<span>Sending...</span>
						</>
					) : (
						<>
							<SendIcon className='w-5 h-5' />
							<span>Send Message</span>
						</>
					)}
				</button>
			</form>
		</section>
	)
}
