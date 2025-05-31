'use client'

import { MailIcon, MessageSquare, SendIcon } from 'lucide-react'

export function Contacts() {
	return (
		<section className='bg-white p-8 rounded-xl shadow-2xl mt-8'>
			<h2 className='font-bold text-xl mb-6'>Contact</h2>
			<form className='flex flex-col gap-4'>
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
						required
						placeholder='example@example.com'
						className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-700 transition-all'
					/>
				</div>

				<div className='flex flex-col gap-2'>
					<label
						htmlFor='contacts-title'
						className='flex items-center gap-2 font-medium'
					>
						<MailIcon className='w-5 h-5' /> Title
					</label>
					<input
						id='contacts-title'
						type='title'
						required
						placeholder='Enter title...'
						className='border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-700 transition-all'
					/>
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
						required
						placeholder='Your message here...'
						rows={4}
						className='border p-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-neutral-700 transition-all'
					/>
				</div>

				<button
					type='submit'
					className='mt-2 bg-black text-white px-4 py-2 rounded-md hover:bg-neutral-900 transition-colors flex items-center gap-2 justify-center font-medium'
				>
					<SendIcon className='w-5 h-5' />
					Send Message
				</button>
			</form>
		</section>
	)
}
