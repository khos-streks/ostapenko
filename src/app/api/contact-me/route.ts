import { NextRequest, NextResponse } from 'next/server'
import Joi from 'joi'
import { Resend } from 'resend'

// Validation Schema
const validationSchema = Joi.object({
	email: Joi.string().min(1).email().required().messages({
		'any.required': "'email' is required"
	}),
	title: Joi.string().min(1).required().messages({
		'any.required': "'title' is required"
	}),
	message: Joi.string().min(20).required().messages({
		'string.min': "'message' must be at least 20 characters long",
		'any.required': "'message' is required"
	})
})

export async function POST(req: NextRequest) {
	try {
		// Body Validation
		const body = await req.json()
		const { value, error } = validationSchema.validate(body)
		if (error) return NextResponse.json({ error: error.message }, { status: 400 })

		// Send email
		const resend = new Resend(process.env.RESEND_API_KEY)
		const res = await resend.emails.send({
			from: 'My Portfolio <onboarding@resend.dev>',
			to: [process.env.CONTACT_EMAIL ?? ''],
			subject: 'New message from ' + value.companyName + ' - ' + value.title,
			html: `<ul><li><b>Company Name:</b> ${value.companyName}</li><li><b>E-Mail:</b> ${value.email}</li><li><b>Title:</b> ${value.title}</li><li><b>Message:</b> ${value.message}</li></ul>`
		})

		// Response
		return NextResponse.json({ ok: true }, { status: 200 })
	} catch (error) {
		// Error Response
		return NextResponse.json({ ok: false }, { status: 500 })
	}
}
