import { useTranslation } from 'react-i18next';
import { memo } from 'react';

import { useArchive } from '@/hooks';
import { Head, ScrollReveal, Table } from '@/components';

import '@/styles/archive.css';

// type ArchivePageProps = {};

const ArchivePage = () => {
  const { columns, rows } = useArchive();
  const { t } = useTranslation('work');

  return (
    <>
      <Head title={t('archive') || ''} />
      <main className="main-archive">
        <ScrollReveal component="header">
          <h1>{t('archive')}</h1>
          <p className="sec-color font--mono mt-4 text-sm">{t('list')}</p>
        </ScrollReveal>
        <Table
          scrollReveal
          rows={rows}
          columns={columns}
          containerClass="primary-color-dark text-xl mt-24 overflow-y-hidden"
        />
      </main>
    </>
  );
};

export default memo(ArchivePage);
