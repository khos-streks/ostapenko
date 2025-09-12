import { Background } from '@/components/ui/background/background'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'
import Provider from './provider'
import { Preloader } from './preloader'

const montserrat = Montserrat({
	variable: '--font-geist-sans',
	subsets: ['latin', 'cyrillic'],
	display: 'swap'
})

export const metadata: Metadata = {
	title: 'Ostapenko Kostiantyn',
	description:
		'Professional web development services for businesses worldwide. Offering custom SaaS solutions, AI-powered applications, and seamless e-commerce integrations. Helping companies scale efficiently with tailored, high-performance websites. Contact us for expert web development and optimization.'
}

export const viewport = {
	themeColor: '#000000'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				<Provider>
					<Preloader />
					<Toaster style={{ color: '#fff' }} />
					<main>
						<Background /> {children}
					</main>
				</Provider>
			</body>
		</html>
	)
}
