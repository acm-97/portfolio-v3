import React from 'react';
import classnames from 'classnames';

import {
  ExternalIcon,
  FolderIcon,
  GithubIcon,
  LinkedInIcon,
  TwiterIcon,
  InstagramIcon,
  LanguageIcon,
  ArrowUpIcon,
} from '@/components/icons';
import { Link, LinkProps } from '@/components';

type IconProps = { name?: string };
type IconRenderProps = {
  name?: 'Folder' | 'GitHub' | 'LinkedIn' | 'Twiter' | 'Instagram' | 'Language' | 'ArrowUp' | 'External';
  className?: string;
  base?: boolean;
  linkProps?: LinkProps;
};

const Icon = ({ name }: IconProps) => {
  switch (name) {
    case 'Folder':
      return <FolderIcon />;
    case 'GitHub':
      return <GithubIcon />;
    case 'LinkedIn':
      return <LinkedInIcon />;
    case 'Twiter':
      return <TwiterIcon />;
    case 'Instagram':
      return <InstagramIcon />;
    case 'Language':
      return <LanguageIcon />;
    case 'ArrowUp':
      return <ArrowUpIcon />;
    default:
      return <ExternalIcon />;
  }
};

const IconRender = ({ name, className = '', base = false, linkProps }: IconRenderProps) => (
  <div className={classnames('icon inline-block', !base && ' h-9 w-9 p-2', className)}>
    {linkProps?.href ? (
      <Link {...linkProps}>
        <Icon name={name} />
      </Link>
    ) : (
      <Icon name={name} />
    )}
  </div>
);
export default IconRender;
