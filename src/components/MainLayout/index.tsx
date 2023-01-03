import { memo } from 'react';

import Layout from './Layout';

import { ProjectsProvider } from '@/contexts';

// type MainLayoutProps = {};

const MainLayout = () => (
  <ProjectsProvider>
    <Layout />
  </ProjectsProvider>
);

export default memo(MainLayout);
