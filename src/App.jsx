import { lazy, Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import Container from './components/Container';
import AppBar from './components/AppBar';
import LoaderComponent from './components/LoaderComponent';

import { authOperations } from './redux/auth';

const HomeView = lazy(() =>
    import('./pages/HomeView' /* webpackChunkName: "home page" */),
);
const RegisterView = lazy(() =>
    import('./pages/RegisterView' /* webpackChunkName: "register page" */),
);
const LoginView = lazy(() =>
    import('./pages/LoginView' /* webpackChunkName: "login page" */),
);
const ContactsView = lazy(() =>
    import('./pages/ContactsView' /* webpackChunkName: "contacts page" */),
);
const NotFoundView = lazy(() =>
    import('./pages/NotFoundView' /* webpackChunkName: "not-found page" */),
);

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authOperations.getCurrentUser());
    }, [dispatch]);

    return (
        <Container>
            <AppBar />

            <Suspense fallback={<LoaderComponent />}>
                <Switch>
                    <PublicRoute path="/" exact>
                        <HomeView />
                    </PublicRoute>

                    <PublicRoute path="/register" restricted redirectTo="/contacts">
                        <RegisterView />
                    </PublicRoute>

                    <PublicRoute path="/login" restricted redirectTo="/contacts">
                        <LoginView />
                    </PublicRoute>

                    <PrivateRoute path="/contacts" redirectTo="/login">
                        <ContactsView />
                    </PrivateRoute>

                    <Route>
                        <NotFoundView />
                    </Route>
                </Switch>
            </Suspense>

            <ToastContainer autoClose={3700} position="top-center" />
        </Container>
    );
}

export default App;
