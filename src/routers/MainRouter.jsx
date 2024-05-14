import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../pages/MainLayout';
import MainPage from '../pages/mainPage/MainPage';

const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
    ],
  },
]);

export default router;
