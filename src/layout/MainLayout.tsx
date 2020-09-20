import React, { ReactNode } from 'react';
import Header from '../components/Header';

interface Props {
  children: ReactNode;
}

export default function MainLayout(props: Props) {
  const { children } = props;
  return (
    <div className="wrapper d-flex align-items-stretch">
      <main className="flex-grow-1 mw-100 overflow-auto min-vh-100">
        <Header />
        <div className="content mt-3 p-3">{children}</div>
      </main>
    </div>
  );
}
