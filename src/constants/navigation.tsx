import { HomePage } from '@/modules';
import { Layout } from '@/components';
import Archive from '@/modules/pages/Archive';

export type routesHashesProps = {
  name: string;
  path: string;
};

export const routesHashes = [
  // { name: 'Home', path: '/' },
  { name: 'About', hash: '#about' },
  { name: 'Experience', hash: '#experience' },
  { name: 'Work', hash: '#work' },
  { name: 'Contact', hash: '#contact' },
];

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'archive',
        element: <Archive />,
      },
    ],
  },
];
