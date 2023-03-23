import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOCAL_STORAGE_CONTINUE_SIGN_UP_KEY } from '../utils/constants/constants';
import { IRegisterFormValues } from '../utils/type/types';
import s from './style.module.scss';
import { AuthContext } from '@global/contexts/AuthContext/AuthContext';
import { to } from '@global/helpers/awaitToFunction';
import { getFromSessionStorage, setToSessionStorage } from '@global/helpers/sessionStorageFunctions';
import { getPhoneNumber } from '@global/hooks/useValidateForm/utils/getValidatedPhoneNumber';
import { AuthService } from '@pages/AuthPage/api/auth.service';
import ToastMessage from '@shared/ToastMessage/ui/ToastMessage';
import FillProfileInfo from '@widgets/FillProfileInfo/ui/FillProfileInfo';
import { IProfileInfoFormInitialValues } from '@widgets/FillProfileInfo/utils/types/validation';
import SignUpForm from '@widgets/SignUpForm/ui/SignUpForm';
import { ISignUpFormInitialValues } from '@widgets/SignUpForm/utils/types/validation';

const SignUpPage = () => {
  const [isContinued, setIsContinued] = useState(getFromSessionStorage(LOCAL_STORAGE_CONTINUE_SIGN_UP_KEY, false));
  const [signUpFormValues, setSignUpFormValues] = useState<IRegisterFormValues>();
  const [registerError, setRegisterError] = useState<string | undefined>();
  const { authme } = useContext(AuthContext);
  const navigate = useNavigate();

  const onCreateAccountSubmit = (formValue: ISignUpFormInitialValues) => {
    setSignUpFormValues({
      phoneNumber: getPhoneNumber(formValue.phoneNumber),
      password: formValue.password,
      email: formValue?.email,
      username: '',
      name: '',
      surname: ''
    });

    setToSessionStorage('isAccountCreatingConinued', true);
    setIsContinued(true);
  };

  const onFillProfileInfoSubmit = async (formValue: IProfileInfoFormInitialValues) => {
    const allRegisterValues = {
      ...signUpFormValues,
      name: formValue.name,
      surname: formValue.surname,
      username: formValue.username
    } as IRegisterFormValues;

    sessionStorage.removeItem(LOCAL_STORAGE_CONTINUE_SIGN_UP_KEY);

    const [error, response] = await to(AuthService.register(allRegisterValues));

    if (error) {
      setRegisterError(error.response?.data.message || 'something went wrong');
      return;
    }

    authme();
    navigate('/main');
  };

  const onErrorSubmit = () => {
    setRegisterError('Invalid form values');
  };

  return (
    <div className={s.wrapper}>
      {!!registerError && <ToastMessage message={registerError} onHidden={() => setRegisterError('')} isError={true} />}
      <div className={s.loginWindow}>
        {isContinued ? (
          <FillProfileInfo onSubmit={(formValue) => onFillProfileInfoSubmit(formValue)} onErrorSubmit={onErrorSubmit} />
        ) : (
          <SignUpForm onSubmit={(formValue) => onCreateAccountSubmit(formValue)} onErrorSubmit={onErrorSubmit} />
        )}
      </div>
    </div>
  );
};

export default SignUpPage;
