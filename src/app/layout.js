import { Urbanist } from 'next/font/google'
import './globals.css'

const urbanist = Urbanist({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'Superior Level Roofing',
  description: 'The best Roofing company in Saskatoon',
  keywords: ['Roofing', 'Pressure Washing', 'Gutter Cleaning', 'Snow Removal'],
  author: 'Superior Level Roofing',
  image: 'URL to an image related to your website (for social sharing)',
  url: 'superiorlevelroofing.com',
  siteName: 'Superior Level Roofing',
  type: 'website',
  locale: 'en_US',
  // twitter: {
  //   card: 'summary_large_image',
  //   site: '@yourtwitterhandle',
  // },
  og: {
    // title: 'Open Graph title (if different from website title)',
    type: 'website',
    url: 'superiorlevelroofing.com',
    image: {
      url: 'URL to an Open Graph image',
      alt: 'Alt text for Open Graph image',
    },
    // description: 'Open Graph description (if different from meta description)',
    site_name: 'Superior Level Roofing',
  },
  accessibility: {
    language: 'en',
    landmarks: 'navigation, banner, services, gallery, about, contact',
    skipToContent: '#main-content',
    ariaRoles:
      'ARIA roles used in important elements (e.g., navigation, button, link)',
    contrastRatio:
      'Minimum contrast ratio for text (e.g., 4.5:1 for normal text, 3:1 for large text)',
    altText: 'Alt text for images that convey information',
    keyboardNavigation:
      'Ensure all interactive elements are keyboard accessible',
  },
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>{children}</body>
    </html>
  )
}
