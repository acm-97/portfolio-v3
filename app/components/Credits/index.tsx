'use client'
import {Trans} from 'react-i18next'
import {memo} from 'react'
import Link from 'next/link'
import {useTranslation} from '@/app/i18n/client'

type CreditsProps = {lng: string}

function Credits({lng}: CreditsProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {t} = useTranslation(lng)

  return (
    <div className="w-full pb-7 text-center">
      <p className="text-xs">
        <Trans
          defaults={t('credits')}
          values={{inspired: 'Brittany Chiang', built: 'Alejandro Cabrera'}}
          components={[
            <Link
              key="inspired"
              className="link-underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://brittanychiang.com/"
            >
              Brittany Chiang
            </Link>,
            <Link
              key="built"
              className="link-underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/acm-97/portfolio-v3"
            >
              Alejandro Cabrera
            </Link>,
          ]}
        />
      </p>
    </div>
  )
}

export default memo(Credits)
