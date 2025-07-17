import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { handleApiError } from '../../(exceptions)/handleApiError'
import { ApiError } from '../../(exceptions)/apiError'
import { z } from 'zod'
import { resend } from '@/lib/resend'

// Validation Schema
const validationSchema = z.object({
	email: z
		.string({ message: 'Email must be a string' })
		.min(1, { message: 'Email must not be empty' })
		.email({ message: 'Email must be valid' }),
	title: z
		.string({ message: 'Title must be a string' })
		.min(1, { message: 'Title must not be empty' }),
	message: z
		.string({ message: 'Message must be a string' })
		.min(20, { message: 'Message must be at least 20 characters long' })
})

export async function POST(req: NextRequest) {
	try {
		// Body Validation
		const body = await req.json()
		const data = await validationSchema.parseAsync(body)

		// Send email
		await resend.emails.send({
			from: 'My Portfolio <onboarding@resend.dev>',
			to: [process.env.CONTACT_EMAIL ?? ''],
			subject: `New message! ${data.title}`,
			html: `<ul><li><b>Email:</b> ${data.email}</li><li><b>Title:</b> ${data.title}</li><li><b>Message:</b> ${data.message}</li></ul>`
		})

		// Response
		return NextResponse.json({ ok: true }, { status: 200 })
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json({ message: error.issues[0].message, ok: false }, { status: 400 })
		} else {
			return handleApiError(error)
		}
	}
}
