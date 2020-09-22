import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import ProductRoutes from './ProductRoutes';
import HomeRoutes from './HomeRoutes';


export default function Routes() {
  return (
    <BrowserRouter>
      <HomeRoutes />
      <ProductRoutes />
    </BrowserRouter>
  );
}
