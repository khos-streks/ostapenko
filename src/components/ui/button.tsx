import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'

const buttonVariants = cva(
	'inline-flex items-center py-2 px-8 justify-center gap-2 whitespace-nowrap text-sm w-min font-medium transition-all disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
	{
		variants: {
			variant: {
				default:
					'rounded-2xl bg-[#121212] text-[#F7FAFC] hover:scale-105 w-full text-lg',
				secondary: 'rounded-2xl backdrop-blur-md bg-black/5 text-black/50 border border-black/10 hover:text-black/60 hover:border-black/20 hover:bg-black/10'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	}
)

function Button({
	className,
	variant,
	...props
}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants>) {
	return (
		<button
			data-slot='button'
			className={clsx(buttonVariants({ variant, className }))}
			{...props}
		/>
	)
}

export { Button, buttonVariants }
