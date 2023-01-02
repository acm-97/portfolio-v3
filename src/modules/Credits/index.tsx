import { Trans, useTranslation } from 'react-i18next';
import { memo } from 'react';

import { Link } from '@/components';

// type CreditsProps = {};

const Credits = () => {
  const { t } = useTranslation('common');

  return (
    <div className="w-full pb-7 text-center">
      <h6>
        <Trans
          // @ts-ignore
          defaults={t('credits')}
          values={{ inspired: 'Brittany Chiang', built: 'Alejandro Cabrera' }}
          components={[
            <Link key="inspired" external href="https://brittanychiang.com/">
              Brittany Chiang
            </Link>,
            <Link key="built" external href="https://github.com/acm-97/portfolio-v3">
              Alejandro Cabrera
            </Link>,
          ]}
        />
      </h6>
    </div>
  );
};

export default memo(Credits);
