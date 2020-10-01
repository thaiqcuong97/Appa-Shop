import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ProductRoutes from './ProductRoutes';
import HomeRoutes from './HomeRoutes';

import Header from '../components/Header'
import { routes } from '../constants';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <HomeRoutes routes={routes} />
      <ProductRoutes routes={routes} />
    </BrowserRouter>

  );
}
