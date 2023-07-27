import {dir} from 'i18next'
import {languages} from '../i18n/settings'
import {Credits, Navbar, Socials} from '@/app/components'

import './globals.css'
import {ProjectsProvider} from '@/app/contexts'

export async function generateStaticParams() {
  return languages.map(lng => ({lng}))
}

export default async function RootLayout({children, params: {lng}}: any) {
  return (
    <html lang={lng} dir={dir(lng)} className="sr dark scroll-smooth">
      <head />
      <body className="bg-primary-main font-sans text-primary-main" suppressHydrationWarning={true}>
        <ProjectsProvider>
          <Navbar lng={lng}>
            {children}
            <Socials />
            <Credits lng={lng} />
          </Navbar>
        </ProjectsProvider>
      </body>
    </html>
  )
}
