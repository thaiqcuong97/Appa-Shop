import React from 'react';

import MainLayout from '../../layout/MainLayout';
import { product } from '../../constants/';
import { Slide } from './components';
import './Home.scss';

export default function Home() {
  return (
    <MainLayout>
      <Slide products={product} />
    </MainLayout>
  );
}
