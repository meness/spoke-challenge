import { lazy } from 'react';
import ROUTE from './utils/constants/route.util';

const TasksPage = lazy(() => import('./pages/tasks/TasksPage/TasksPage'));

const ROUTES = [{ path: ROUTE.HOME, element: <TasksPage /> }];

export default ROUTES;
