import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ContextProvider } from './context/context';
import { Home } from './screens/Home';
import { Cart } from './screens/Cart';
import { PurchaseMade } from './screens/PurchaseMade';
import { Header } from './components/Header';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 16px;
`;

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/Cart', element: <Cart /> },
  { path: '/PurchaseMade', element: <PurchaseMade /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <Container>
        <Header />
        <RouterProvider router={router} />
      </Container>
    </ContextProvider>
  </React.StrictMode>
);
