import { lazy } from 'react';

const TasksPage = lazy(() => import('./pages/tasks/TasksPage/TasksPage'));

const ROUTES = [{ path: '/', element: <TasksPage /> }];

export default ROUTES;
