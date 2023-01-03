import { Outlet, useLoaderData } from 'react-router-dom';
import { memo, useRef, useEffect, useState, ReactNode } from 'react';

import NavMenu from './NavMenu';

import { scrollToTop } from '@/utils';
import { Icon, Link, SiteLogo } from '@/components';

import '@/styles/navbar.css';

type NavBarProps = { children: ReactNode };

const Navbar = ({ children }: NavBarProps) => {
  const refDrawer = useRef<HTMLDivElement>(null);
  const refDrawerInput = useRef<HTMLInputElement>(null);
  const [drawerInput, setDrawerInput] = useState<HTMLInputElement | null>(null);

  const handleChecked = (checked: boolean) => {
    if (checked && refDrawer?.current) {
      refDrawer.current.style.height = '100dvh';
    } else if (refDrawer?.current) refDrawer.current.style.height = '100%';
  };

  const onScrollToTop = () => {
    scrollToTop();
    window.history.pushState
      ? window.history.pushState('', '/', window.location.pathname)
      : (window.location.hash = '');
  };

  useEffect(() => setDrawerInput(refDrawerInput.current), [refDrawerInput]);

  return (
    <>
      <div className="drawer drawer-end h-full flex-col" ref={refDrawer}>
        <input
          id="my-drawer-3"
          type="checkbox"
          className="drawer-toggle"
          onClick={(e: any) => handleChecked(e.target.checked)}
          ref={refDrawerInput}
        />
        <div className="drawer-content flex h-full w-full overflow-hidden">
          {/* <!-- Navbar --> */}
          <div className="navbar-fixed navbar h-16 w-full bg-base-100 px-4 text-sm sm:px-9">
            <div className="mx-2 flex-1 px-2">
              <Link href="/" className="logo rounded-lg px-2">
                <SiteLogo />
              </Link>
            </div>
            <div className="hidden flex-none md:block">
              <NavMenu horizontal />
            </div>
            <div className="flex-none md:hidden">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="my-drawer-3" className="btn-ghost btn-square btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          <main>{children}</main>
        </div>

        {/* <!-- Sidebar here --> */}
        <div className="drawer-side md:hidden">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="my-drawer-3" className="drawer-overlay" />
          <NavMenu drawerInput={drawerInput} handleDrawer={handleChecked} />
        </div>
      </div>

      <button
        type="button"
        onClick={onScrollToTop}
        id="fixed-button"
        className="btn-square btn fixed bottom-4 right-2 hidden"
      >
        <Icon name="ArrowUp" />
      </button>
    </>
  );
};

export default memo(Navbar);
