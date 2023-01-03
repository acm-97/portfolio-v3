import { Outlet } from 'react-router-dom';
import { memo } from 'react';

import Navbar from '../Navbar';

import { Credits } from '@/modules/containers';
import { useGithubProjects } from '@/contexts';

// type LayoutProps = {};

const Layout = () => {
  const { isLoading } = useGithubProjects();

  if (isLoading) {
    return <div>....is loading</div>;
  }

  return (
    <Navbar>
      <>
        <Outlet />
        <Credits />
      </>
    </Navbar>
  );
};

export default memo(Layout);
