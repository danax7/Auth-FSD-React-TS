import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../api/auth.service';
import { ASYNC_DURATION } from '../utils/constants/constants';
import useAsync from '../utils/hooks/useAsync';
import s from './style.module.scss';
import { AuthContext } from '@global/contexts/AuthContext/AuthContext';
import Preloader from '@shared/Preloader/ui/Preloader';

const AuthPage = () => {
  const { result, loading, error, isSuccess, execute } = useAsync({
    asyncFunction: AuthService.main,
    duration: ASYNC_DURATION
  });
  const { isAuth, authme } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    execute();
  }, []);

  useEffect(() => {
    debugger;
    if (error) {
      navigate('/login');
    }

    if (isSuccess) {
      authme();
    }
  }, [isSuccess, error]);

  useEffect(() => {
    debugger;
    if (isAuth) {
      navigate('/main');
    }
  }, [isAuth]);

  return <div className={s.auth}>{loading && <Preloader />}</div>;
};

export default AuthPage;
