import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';

import { routes } from '@/constants';

import '../i18n';
import '@/styles/index.css';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
