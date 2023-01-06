import { useTranslation } from 'react-i18next';
import { memo } from 'react';

import { GMAIL } from '@/constants';
import { Link, ScrollReveal } from '@/components';

// type ContactProps = {};

const Contact = () => {
  const { t } = useTranslation('common');
  return (
    <ScrollReveal className="mx-auto mb-24 max-w-[37.5rem] text-center">
      <h6 className="sec-color font--mono mb-2 block font-normal">04. {t('contactSection.title')}</h6>
      <h2 className="mb-7">{t('contactSection.started')}</h2>
      <p className="primary-color-dark text-xl">{t('contactSection.message')}</p>
      <Link
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${GMAIL as string}`}
        external
        className="btn-teal font--mono btn-outline btn mt-12"
      >
        {t('contactSection.button')}
      </Link>
    </ScrollReveal>
  );
};

export default memo(Contact);
