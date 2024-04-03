import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Container>
          <Header />
          <Routes>
            <Route path="/:search-query?" element={<Home />} /> 
            <Route path="/Cart" element={<Cart />} />
            <Route path="/PurchaseMade" element={<PurchaseMade />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
