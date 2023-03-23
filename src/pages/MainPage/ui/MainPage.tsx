import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@global/contexts/AuthContext/AuthContext';
import { AuthService } from '@pages/AuthPage/api/auth.service';

export const MainPage = () => {
  const { disauthme } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogoutClick = () => {
    disauthme();
    AuthService.logout();
    navigate('/');
  };

  return (
    <main>
      <button onClick={onLogoutClick}>Logout</button>
    </main>
  );
};
