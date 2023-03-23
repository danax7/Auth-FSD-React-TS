import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '@global/contexts/AuthContext/AuthContext';

const ProtectedRoute = () => {
  const location = useLocation();
  const { isAuth } = useContext(AuthContext);

  debugger;
  if (!isAuth) {
    return <Navigate to="/auth" replace state={{ from: location }} />;
  }

  if (location.pathname === '/') {
    return <Navigate to="/main" replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
