// components/Layout.js
import React from 'react';
import Header from '../home/Header';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
