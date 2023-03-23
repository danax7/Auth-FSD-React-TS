import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './style.module.scss';
import { AuthContext } from '@global/contexts/AuthContext/AuthContext';
import { to } from '@global/helpers/awaitToFunction';
import { getPhoneNumber } from '@global/hooks/useValidateForm/utils/getValidatedPhoneNumber';
import { AuthService } from '@pages/AuthPage/api/auth.service';
import ToastMessage from '@shared/ToastMessage/ui/ToastMessage';
import LoginForm from '@widgets/LoginForm/ui/LoginForm';
import { ILoginFormValues } from '@widgets/LoginForm/utils/types/validate';
import LoginQR from '@widgets/LoginQR/ui/LoginQR';
import PasswordRecovery from '@widgets/PasswordRecovery/ui/PasswordRecovery';

const LoginPage = () => {
  const [isForgot, setIsForgot] = useState(false);
  const [loginError, setLoginError] = useState('');
  const { isAuth, authme } = useContext(AuthContext);
  const navigate = useNavigate();


  const onLoginFormSubmit = async (formValues: ILoginFormValues) => {
    const [error, response] = await to(
      AuthService.login({ ...formValues, phoneNumber: getPhoneNumber(formValues.phoneNumber) })
    );

    if (error) {
      setLoginError(error.response?.data.message || 'something went wrong');
      return;
    }

    debugger;
    authme();
  };

  useEffect(() => {
    if (isAuth) {
      navigate('/main');
    }
  }, [isAuth]);

  const onErrorSubmit = () => {
    setLoginError('Invalid form values');
  };

  return (
    <section className={s.login}>
      {!!loginError && <ToastMessage message={loginError} onHidden={() => setLoginError('')} isError={true} />}
      {isForgot ? (
        <div className={`${s.login__content} ${s.login__content_small}`}>
          <PasswordRecovery />
        </div>
      ) : (
        <div className={`${s.login__content} ${s.login__content_big}`}>
          <LoginForm
            onSubmit={(values) => onLoginFormSubmit(values)}
            setIsForgot={setIsForgot}
            onErrorSubmit={onErrorSubmit}
          />
          <LoginQR />
        </div>
      )}
    </section>
  );
};

export default LoginPage;
