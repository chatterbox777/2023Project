import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/' element={<MainPage />}></Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;