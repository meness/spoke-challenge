import { Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import GeneralLayout from './components/layouts/GeneralLayout';
import ROUTES from './routes';
import CircularLoading from './components/elements/CircularLoading';
import './App.css';

function App() {
  return useRoutes(ROUTES);
}

function AppWrapper() {
  return (
    <Suspense fallback={<CircularLoading />}>
      <GeneralLayout>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GeneralLayout>
    </Suspense>
  );
}

export default AppWrapper;
