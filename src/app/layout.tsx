import { Header } from '@/components/shared/header/header'
import { Castoro, Manrope } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'
import Provider from './provider'
import clsx from 'clsx'
import { Footer } from '@/components/shared/footer/footer'
import { generateMeta } from '@/utils/generateMeta'

const manrope = Manrope({
	variable: '--font-manrope',
	subsets: ['latin'],
	display: 'swap'
})

const castoro = Castoro({
	variable: '--font-castoro',
	weight: '400',
	subsets: ['latin'],
	display: 'swap'
})

export async function generateMetadata() {
	return await generateMeta({
		title: 'Kostiantyn Ostapenko',
		description:
			'Full-stack engineer specializing in scalable SaaS development. I build fast, reliable, user-focused applications with clean architecture, solid engineering practices, and seamless delivery.'
	})
}

export const viewport = {
	themeColor: '#000000'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<body className={clsx(manrope.className, castoro.variable)}>
				<Provider>
					<Toaster style={{ color: '#fff' }} />
					<Header />
					<main>{children}</main>
					<Footer />
				</Provider>
			</body>
		</html>
	)
}
