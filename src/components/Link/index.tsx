import { ReactNode, memo } from 'react';
import classnames from 'classnames';

export type LinkProps = {
  href: string;
  external?: boolean;
  children?: ReactNode;
  underline?: boolean;
  onClick?: () => void;
  className?: string;
  download?: string;
};

const Link = ({
  href,
  children,
  underline = false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick = () => {},
  className = '',
  external = true,
  download,
}: LinkProps) =>
  !external ? (
    <a href={href} onClick={onClick} download={download} className={classnames(underline && 'underline', className)}>
      {children && children}
    </a>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      download={download}
      className={classnames(underline && 'underline', className)}
    >
      {children && children}
    </a>
  );

export default memo(Link);
