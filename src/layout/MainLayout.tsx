import React, { ReactNode } from 'react';
import Header from '../components/Header';

interface Props {
  children: ReactNode;
}

export default function MainLayout(props: Props) {
  const { children } = props;
  return (
    <div className="appa-shop">
      <Header />
      <main>{children}</main>
    </div>
  );
}
