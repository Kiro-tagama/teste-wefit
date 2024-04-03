import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import { ContextProvider } from './context/context';
import { Home } from './screens/Home';
import { Cart } from './screens/Cart';
import { PurchaseMade } from './screens/PurchaseMade';
import styled from 'styled-components';
import { Header } from './components/Header';

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
      <BrowserRouter>
        <Container>
          <Header />
          <Routes>  {/* Use Routes instead of Router */}
            <Route path="/" element={<Home />} />  {/* Use element prop */}
            <Route path="/Cart" element={<Cart />} />
            <Route path="/PurchaseMade" element={<PurchaseMade />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
