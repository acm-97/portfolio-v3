import { useLocation, Link as LinkRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import classnames from 'classnames';

import { routesHashes } from '@/constants';
import { Icon, Link } from '@/components';

type NavMenuProps = {
  horizontal?: boolean;
  className?: string;
  drawerInput?: HTMLInputElement | null;
  handleDrawer?: (checked: boolean) => void;
};

const NavMenu = ({ className = '', horizontal = false, drawerInput, handleDrawer }: NavMenuProps) => {
  const { t, i18n } = useTranslation('common');
  let { hash, pathname } = useLocation();

  const menuStyles = horizontal
    ? 'menu-horizontal'
    : 'w-80 bg-base-100 p-4 flex-col justify-center items-center text-3xl';

  const onClick = () => {
    if (drawerInput?.checked) drawerInput.checked = false;
    handleDrawer && handleDrawer(false);
  };

  const handleLanguage = async () => {
    if (i18n.language === 'en') await i18n.changeLanguage('es');
    else await i18n.changeLanguage('en');
  };

  return (
    <ul className={classnames(className, menuStyles, 'menu')}>
      {routesHashes.map(({ name, hash: _hash }, i) => (
        <li key={name} className="p-3.5">
          <LinkRouter
            reloadDocument={pathname === '/'}
            className={classnames(
              !horizontal && 'flex flex-col',
              hash === _hash && 'sec-color',
              '  gap-1  p-0 hover:bg-transparent focus:bg-transparent',
            )}
            to={`/${_hash}`}
            onClick={onClick}
          >
            <span className="sec-color p-0">{`0${i + 1}.`}</span> {t(name.toLowerCase())}
          </LinkRouter>
        </li>
      ))}
      <li className="p-3">
        <button
          type="button"
          onClick={handleLanguage}
          className={classnames(
            'sec-color-light sec-color btn mt-14 h-16 gap-2 rounded p-3 max-md:text-2xl md:mt-0 md:h-8 md:py-0 md:min-h-8',
          )}
        >
          <Icon name="Language" base className={!horizontal ? 'h-10 w-10' : 'h-5 w-5'} />
          {i18n.language}
        </button>
      </li>
    </ul>
  );
};

export default memo(NavMenu);
