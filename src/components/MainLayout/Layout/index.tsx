import { Outlet, useLocation } from 'react-router-dom';
import { memo, useEffect, useState } from 'react';

import Navbar from '../Navbar';

import { Credits } from '@/modules/containers';
import { useGithubProjects } from '@/contexts';
import { Head, LoaderIcon, Socials } from '@/components';

// type LayoutProps = {};

const Layout = () => {
  let { pathname } = useLocation();
  const { isLoading } = useGithubProjects();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(false);
    const timeout = setTimeout(() => setIsMounted(true), 2500);
    return () => clearTimeout(timeout);
  }, [pathname]);

  if (isLoading || !isMounted) {
    return (
      <>
        <Head />
        <div className="flex min-h-[100vh] w-full items-center justify-center">
          <LoaderIcon width={300} />
        </div>
      </>
    );
  }

  return (
    <Navbar>
      <Outlet />

      {/* Footer */}
      <Credits />
      <Socials />
      {/* <Button onClick={onScrollToTop} className="btn-square btn fixed bottom-4 right-2 hidden">
        <Icon name="ArrowUp" />
      </Button> */}
    </Navbar>
  );
};

export default memo(Layout);
