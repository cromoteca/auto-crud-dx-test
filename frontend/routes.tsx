import MainLayout from 'Frontend/views/MainLayout.js';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import PersonCrud from './views/crud/PersonCrud';

export const routes = [
  {
    element: <MainLayout />,
    handle: { title: 'Main' },
    children: [
      { path: '/', element: <PersonCrud />, handle: { title: 'Edit persons' } },
    ],
  },
] as RouteObject[];

export default createBrowserRouter(routes);
