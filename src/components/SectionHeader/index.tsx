import { memo } from 'react';
import classnames from 'classnames';

import { ScrollReveal } from '@/components';

type SectionHeaderProps = { num: number; text: string; className?: string; scrollReveal?: boolean };

const SectionHeader = ({ num, text, className = '', scrollReveal = false }: SectionHeaderProps) =>
  scrollReveal ? (
    <ScrollReveal>
      <h3 className={classnames(className, 'line-header mt-2 mb-10 flex w-full items-center whitespace-nowrap')}>
        <span className="sec-color font--mono mr-2 text-xl">{`0${num}.`} </span>
        {text}
      </h3>
    </ScrollReveal>
  ) : (
    <h3 className={classnames(className, 'line-header mt-2 mb-10 flex w-full items-center whitespace-nowrap')}>
      <span className="sec-color font--mono mr-2 text-xl">{`0${num}.`} </span>
      {text}
    </h3>
  );

export default memo(SectionHeader);
