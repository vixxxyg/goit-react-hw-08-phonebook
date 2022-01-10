import Section from './components/Section/Section';
import AppBar from './components/AppBar/AppBar';
// import Loader from './components/Loader/Loader';
// import Loading from './components/Loader/Loader';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import authOperations from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';

const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView/ContactsView'));
const NotFoundView = lazy(() => import('./views/NotFoundView/NotFoundView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Section>
      {isFetchingCurrentUser ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <AppBar />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route
                path="/*"
                element={
                  <PublicRoute>
                    <HomeView />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute restricted>
                    <RegisterView />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <LoginView />
                  </PublicRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login">
                    <ContactsView />
                  </PrivateRoute>
                }
              />
              <Route path="/*" element={<NotFoundView />} />
            </Routes>
          </Suspense>
        </>
      )}
    </Section>
  );
}
