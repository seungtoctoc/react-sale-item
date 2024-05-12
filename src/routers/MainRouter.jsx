import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../pages/MainLayout';
import Main from '../pages/main/Main';
import { RouterFill } from 'react-bootstrap-icons';

const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
    ],
  },
]);

export default router;
