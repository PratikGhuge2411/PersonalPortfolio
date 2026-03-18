import React from 'react';
import Navbar from './navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="page-container">
        <Outlet />  {/* 🔥 THIS IS THE FIX */}
      </main>
      <footer />
    </>
  );
};

export default Layout;