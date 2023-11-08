import MainLayout from 'Frontend/views/MainLayout.js';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import PersonCrud from './views/crud/PersonCrud';
import PersonForm from './views/form/PersonForm';

export const routes = [
  {
    element: <MainLayout />,
    handle: { title: 'Main' },
    children: [
      { path: '/', element: <PersonCrud />, handle: { title: 'CRUD' } },
      { path: '/form', element: <PersonForm />, handle: { title: 'Form' } },
    ],
  },
] as RouteObject[];

export default createBrowserRouter(routes);
