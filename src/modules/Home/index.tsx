import { useTranslation } from 'react-i18next';
import { memo } from 'react';

import { ScrollReveal } from '@/components';

// type ComponentProps = {};

const Home = () => {
  const { t } = useTranslation('home');
  return (
    <ScrollReveal
      component="div"
      className="flex w-full flex-col items-start text-start"
      origin="bottom"
      interval={200}
      easing="ease-in"
    >
      <h6 className="sec-color font--mono mb-5 ml-1 font-normal">{t('salute')}</h6>

      <h1 className="primary-color-light mb-1 font-black">{t('name')}</h1>
      <h1 className="primary-color-dark font-black">
        {t('occupation.part1')} <span className="sec-color">UI</span> {t('occupation.part2')}.
      </h1>
      <p className="primary-color-dark mt-5 max-w-xl text-xl">{t('description')}</p>
      <button type="button" className="btn-teal font--mono btn-outline btn mt-12">
        {t('downloadResume')}
      </button>
    </ScrollReveal>
  );
};

export default memo(Home);
