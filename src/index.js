import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import 'bulma/css/bulma.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import App from './App';
import { LandingPage } from './pages/Landing';
import { ProductsPage } from './pages/Products';
import { CustomersPage } from './pages/Customers';
import { ProvidersPage } from './pages/Providers';
import { BalancePage } from './pages/Balance';
import { TransfersPage } from './pages/Transfers';
import { PaymentsPage } from './pages/Payments';
import { MainLayout } from './components/root';
import ErrorPage from './pages/error-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: 'products',
        element: <ProductsPage />
      },
      {
        path: 'customers',
        element: <CustomersPage />
      },
      {
        path: 'providers',
        element: <ProvidersPage />
      },
      {
        path: 'transactions/balance',
        element: <BalancePage />
      },
      {
        path: 'transactions/transfers',
        element: <TransfersPage />
      },
      {
        path: 'transactions/payments',
        element: <PaymentsPage />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
