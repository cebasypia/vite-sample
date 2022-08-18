import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import About from './pages/About';
import Home from './pages/Home';
import MarkDown from './pages/MarkDown';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>
        <Route path='/markdown' element={<MarkDown />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
