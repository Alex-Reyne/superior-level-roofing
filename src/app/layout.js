import { Urbanist } from 'next/font/google'
import './globals.css'

const urbanist = Urbanist({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>{children}</body>
    </html>
  )
}
