import {dir} from 'i18next'
import {languages} from '../i18n/settings'
import {Navbar} from '@/app/components'

import './globals.css'

export async function generateStaticParams() {
  return languages.map(lng => ({lng}))
}

export default async function RootLayout({children, params: {lng}}: any) {
  return (
    <html lang={lng} dir={dir(lng)} className="sr dark scroll-smooth">
      <head />
      <body className="bg-primary-main font-sans text-primary-main" suppressHydrationWarning={true}>
        <Navbar lng={lng}>{children}</Navbar>
      </body>
    </html>
  )
}
