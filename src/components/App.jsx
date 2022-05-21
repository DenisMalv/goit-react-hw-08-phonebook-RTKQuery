import React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage.js'));
const RegisterPage = lazy(() => import('pages/RegisterPage.js'));
const LoginPage = lazy(() => import('pages/LoginPage.js'));
const Page404 = lazy(() => import('pages/Page404.js'));
const ContactsPage = lazy(() => import('pages/ContactsPage.js'));
const PrivateRoute = lazy(() => import('pages/PrivateRoute.js'));
const PublicRoute = lazy(() => import('pages/PublicRoute.js'));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            ></Route>
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
  // }
};

export default App;
