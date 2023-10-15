'use client'
import {Helmet} from 'react-helmet'
import {memo} from 'react'

import {SITE_URL, TWITER} from '@/app/constants'
import {useTranslation} from '../i18n/client'

type HeadProps = {title: string; lng: any}

function Head({title, lng}: HeadProps) {
  const {t, i18n} = useTranslation(lng)
  const twitterUsername = (TWITER as string).split('/')
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const seo = {
    title: 'Portfolio.v3',
    description: 'A showcase of my history, my work and my skills as a web developer.',
    image: `${SITE_URL as string}/portfolio-v3.png`,
    url: SITE_URL,
    twitterUsername: twitterUsername[twitterUsername.length - 1],
    favicon: `${SITE_URL as string}/logo.svg`
  }

  return (
    <Helmet
      title={t(title)}
      defaultTitle={seo.title}
      titleTemplate={title ? `%s | ${seo.title}` : seo.title}
    >
      <html lang={i18n.language} />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <link rel="icon" href={seo.favicon} type="image/svg+xml" />

      {/* <meta name="google-site-verification" content="DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk" /> */}
    </Helmet>
  )
}

export default memo(Head)
