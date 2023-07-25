import {memo} from 'react'
import cls from 'classnames'

import {routesHashes} from '@/app/constants'
import {Icon} from '@/app/components'
import {useTranslation} from '@/app/i18n/client'
import Link from 'next/link'

type NavMenuProps = {
  horizontal?: boolean
  className?: string
  drawerInput?: HTMLInputElement | null
  handleDrawer?: (checked: boolean) => void
  lng: string
  hash: string
  setHash: (hash: string) => void
}

const NavMenu = ({
  className = '',
  horizontal = false,
  drawerInput,
  handleDrawer,
  lng,
  hash,
  setHash,
}: NavMenuProps) => {
  const {t, i18n} = useTranslation(lng, 'common')

  const onClick = (hash: string) => {
    setHash(hash)

    if (!horizontal) {
      if (drawerInput?.checked) drawerInput.checked = false
      handleDrawer?.(false)
    }
  }

  const handleLanguage = async () => {
    if (i18n.language === 'en') await i18n.changeLanguage('es')
    else await i18n.changeLanguage('en')
  }

  return (
    <ul
      className={cls(
        className,
        '[&>*:nth-child(1)]:animation-delay-[0.3s] [&>*:nth-child(2)]:animation-delay-[0.4s] [&>*:nth-child(3)]:animation-delay-[0.5s] [&>*:nth-child(4)]:animation-delay-[0.6s] [&>*:nth-child(5)]:animation-delay-[0.7s]',
        horizontal && 'menu-horizontal',
        !horizontal &&
          'menu h-full w-80 flex-col items-center justify-center bg-[#2a303c] p-4 text-3xl',
      )}
    >
      {routesHashes.map(({name, hash: _hash}, i) => (
        <li key={name} className={'group animate-fade-in-down p-3.5'}>
          <Link
            // reloadDocument={pathname === '/'}
            className={cls(
              'group-hover:text-secondary-main gap-1 px-0 hover:bg-transparent focus:bg-transparent',
              !horizontal && 'flex flex-col',
              hash === _hash && 'text-secondary-main',
            )}
            href={`${_hash}`}
            onClick={() => onClick(_hash)}
          >
            <span className="p-0 text-secondary-main">{`0${i + 1}.`}</span> {t(name.toLowerCase())}
          </Link>
        </li>
      ))}
      <li className="my-auto animate-fade-in-down px-0">
        <button
          type="button"
          onClick={handleLanguage}
          className="btn mt-14 h-14 gap-2 rounded text-secondary-main md:min-h-6 max-md:text-2xl md:mt-0 md:h-8 "
        >
          <Icon name="Language" base className={!horizontal ? 'h-6 w-6' : 'h-4 w-4'} />
          {i18n.language}
        </button>
      </li>
    </ul>
  )
}

export default memo(NavMenu)
