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
    <GeneralLayout>
      <Suspense fallback={<CircularLoading />}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </GeneralLayout>
  );
}

export default AppWrapper;
