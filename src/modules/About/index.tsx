import { Trans, useTranslation } from 'react-i18next';
import { memo } from 'react';

import { CRAI, DOFLEINI } from '@/constants';
import { ScrollReveal, SectionHeader as Header, Link } from '@/components';

import '@/styles/about.css';

// type AboutProps = { sectioRef: any };

const About = () => {
  const { t } = useTranslation('about');
  return (
    <div className="w-full">
      <Header scrollReveal num={1} text={t('title')} />
      <ScrollReveal component="ul" className="grid-ab" interval={300}>
        <li className="text-xl">
          <p>{t('history.part1')}</p>
          <p className="relative">
            <Trans
              // @ts-ignore
              defaults={t('history.part2')}
              values={{ crai: 'Learning and Research Resources Centre', dofleini: 'software development company' }}
              // eslint-disable-next-line react/jsx-key, jsx-a11y/control-has-associated-label, jsx-a11y/anchor-has-content
              components={[<a href={CRAI} />, <a href={DOFLEINI} />]}
            />
          </p>
          <p>{t('history.part3')}</p>
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Angular</li>
            <li>Python</li>
          </ul>
        </li>
        <li>
          <div className="profile-img-container">
            <div className="profile-img-frame">
              <img className=" opacity-0" alt="profile.png" src="/profile.png" />
            </div>
            <div className="profile-img">
              <img alt="profile.png" src="/profile.png" />
              <div className="tag-name">{t('fullName')}</div>
              <div className="tag-occupation">{t('occupation')}</div>
            </div>
          </div>
        </li>
      </ScrollReveal>
    </div>
  );
};

export default memo(About);
