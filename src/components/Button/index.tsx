import { ReactNode, memo } from 'react';
import classnames from 'classnames';
import { ScrollReveal } from '@/components';

type ButtonProps = { className?: string; children: ReactNode; onClick?: () => void; scrollReveal?: boolean };

// eslint-disable-next-line @typescript-eslint/no-empty-function
const Button = ({ className = '', children, onClick = () => {}, scrollReveal = false }: ButtonProps) =>
  scrollReveal ? (
    <ScrollReveal>
      <button type="button" className={classnames('btn-teal font--mono btn-outline btn', className)} onClick={onClick}>
        {children}
      </button>
    </ScrollReveal>
  ) : (
    <button type="button" className={classnames('btn-teal font--mono btn-outline btn', className)} onClick={onClick}>
      {children}
    </button>
  );

export default memo(Button);
