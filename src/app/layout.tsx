import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import Provider from './provider'
import { Background } from '@/components/ui/background/background'

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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-X3LBB9FYY1'
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-X3LBB9FYY1');
	`
					}}
				></script>
				<script
					type='text/javascript'
					dangerouslySetInnerHTML={{
						__html: `window.smartlook||(function(d) {
    var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
    var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
    c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
    })(document);
    smartlook('init', '05b80ee3f0c2f12c535541d7e0a78af4c476b773', { region: 'eu' });`
					}}
				></script>
				<Provider>
					<Toaster theme='dark' />
					<main>
						<Background /> {children}
					</main>
				</Provider>
			</body>
		</html>
	)
}
