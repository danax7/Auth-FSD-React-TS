import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './providers/auth/auth';
import router from './providers/router/router';
import './styles/App.scss';

const App = () => (
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

export default App;
