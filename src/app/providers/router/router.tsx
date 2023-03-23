import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import AuthPage from '@pages/AuthPage/ui/AuthPage';
import LoginPage from '@pages/LoginPage/ui/LoginPage';
import { MainPage } from '@pages/MainPage/ui/MainPage';
import SignUpPage from '@pages/SignUpPage/ui/SignUpPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/main',
        element: <MainPage />
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <SignUpPage />
  },
  {
    path: '/auth',
    element: <AuthPage />
  }
]);

export default router;
