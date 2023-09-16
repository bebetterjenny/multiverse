import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import Tags from './Pages/Tags';
import Metaverse from './Pages/MetaVerse';
import Day from './Pages/Day';
import { useLocation } from 'react-router-dom';
import SelectMetaVerse from './Pages/SelectMetaVerse/SelectMetaVerse';
import Test from './Pages/Test/Test';

const ReactLandingPage = () => {

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="/landing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Enter
      </a>
    </header>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <ReactLandingPage />,
  },
  {
    path: '/landing', // Landing page
    element: <Landing />,
  },
  {
    path: '/login', // 登录页面
    element: <Login />,
  },
  {
    path: '/tags',
    element: <Tags />,
  },
  {
    path: '/select-metaverse', // 选择卡片
    element: <SelectMetaVerse />,
  },
  {
    path: '/metaverse', // 平行时空简介
    element: <Metaverse />,
  },
  {
    path: '/day', // 模拟一整天
    element: <Day />,
  },
  {
    path: '/test',
    element: <Test />,
  },
]);

function App() {

  return (
    <div className="App">
      <div className="background"></div>
      <div className="mobile-container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
