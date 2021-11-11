import { lazy } from 'react';
import { ROUTE } from './utils/constants/route.util';

const TasksPage = lazy(() => import('./pages/tasks/TasksPage/TasksPage'));
const EditTaskPage = lazy(() => import('./pages/tasks/EditTaskPage/EditTaskPage'));

const ROUTES = [
  { path: ROUTE.HOME, element: <TasksPage /> },
  { path: ROUTE.EDIT_TASK, element: <EditTaskPage /> },
];

export default ROUTES;
