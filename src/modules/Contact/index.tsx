import { useTranslation } from 'react-i18next';
import { memo } from 'react';

import { GMAIL } from '@/constants';
import { Button, Link, ScrollReveal } from '@/components';

// type ContactProps = {};

const Contact = () => {
  const { t } = useTranslation('common');
  return (
    <ScrollReveal className="mx-auto mb-24 max-w-[37.5rem] text-center">
      <h6 className="sec-color font--mono mb-2 block font-normal">04. {t('contactSection.title')}</h6>
      <h2 className="mb-7">{t('contactSection.started')}</h2>
      <p className="primary-color-dark text-xl">{t('contactSection.message')}</p>
      <Button className="mt-12">
        <Link href={`https://mail.google.com/mail/?view=cm&fs=1&to=${GMAIL as string}`} external>
          {t('contactSection.button')}
        </Link>
      </Button>
    </ScrollReveal>
  );
};

export default memo(Contact);
