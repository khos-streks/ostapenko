import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'

const buttonVariants = cva(
	'inline-flex items-center py-2 px-8 justify-center gap-2 whitespace-nowrap rounded-md text-sm w-min font-medium transition-all disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
	{
		variants: {
			variant: {
				default:
					'rounded-2xl bg-white text-[#09090B] hover:scale-105 w-full text-lg',
				secondary: 'rounded-2xl backdrop-blur-md bg-white/5 text-white/50 border border-white/10 hover:text-white hover:border-white/40'
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
