import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ProductRoutes from './ProductRoutes';
import HomeRoutes from './HomeRoutes';

import Header from '../components/Header'

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <HomeRoutes />
      <ProductRoutes />
    </BrowserRouter>

  );
}
