'use client'
import {memo} from 'react'
import {useArchive} from '@/app/hooks'
import {Head, RevealList, Table} from '@/app/components'
import {useTranslation} from '@/app/i18n/client'

type ArchivePageProps = {lng: string}

function ArchivePage({lng}: ArchivePageProps) {
  const {columns, rows} = useArchive()
  const {t} = useTranslation(lng, 'work')

  return (
    <>
      <Head lng={lng} title={t('archive') || ''} />
      <main className="min-h-screen w-full p-[200px_150px] max-lg:p-[12.5rem_6.25rem] max-md:p-[9.375rem_3.125rem] [@media(max-width:480px)]:p-[7.8125rem_1.5625rem]">
        <RevealList delay={500} interval={200} component="header">
          <h1>{t('archive')}</h1>
          <p className="mt-4 font-mono text-sm text-secondary-main">{t('list')}</p>
        </RevealList>
        <Table
          scrollReveal
          rows={rows}
          columns={columns}
          containerClass="text-primary-dark text-xl mt-24 "
          tableRowBodyProps={{className: 'border-none'}}
          tableHeaderProps={{className: 'border-none'}}
        />
      </main>
    </>
  )
}

export default memo(ArchivePage)
