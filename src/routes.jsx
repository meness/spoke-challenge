import { lazy } from 'react';

const TasksPage = lazy(() => import('./pages/tasks/TasksPage/TasksPage'));
const EditTaskPage = lazy(() => import('./pages/tasks/EditTaskPage/EditTaskPage'));

const ROUTES = [
  { path: '/', element: <TasksPage /> },
  { path: ':taskId', element: <EditTaskPage /> },
];

export default ROUTES;
