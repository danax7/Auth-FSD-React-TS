import { LOCAL_STORAGE_SIGN_UP_KEY } from '../utils/constants/constants';
import { ISignUpFormProps } from '../utils/types/types';
import { ISignUpFormInitialValues } from '../utils/types/validation';
import { getFormErrors } from '../utils/validation/getFormErrors';
import { initialValues } from '../utils/validation/initialValues';
import s from './style.module.scss';
import InputAndLabel from '@entities/InputAndLabel/ui/InputAndLabel';
import { getFromSessionStorage } from '@global/helpers/sessionStorageFunctions';
import { useValidateForm } from '@global/hooks/useValidateForm/useValidateForm';
import Button from '@shared/Button/ui/Button';
import FormLinkToPage from '@shared/FormLinkToPage/ui/FormLinkToPage';

const SignUpForm = ({ onSubmit, onErrorSubmit }: ISignUpFormProps) => {
  const trueForm = useValidateForm({
    validateOnChange: true,
    initialValues: getFromSessionStorage(LOCAL_STORAGE_SIGN_UP_KEY, initialValues),
    validateInputs: getFormErrors,
    submitForm: (values: ISignUpFormInitialValues) => {
      onSubmit(values);
      sessionStorage.removeItem(LOCAL_STORAGE_SIGN_UP_KEY);
    },
    onInvalidFormSubmit: () => {
      onErrorSubmit();
    }
  });

  return (
    <div className={`${s.loginForm} ${s.signUpForm}`}>
      <div className={s.loginForm__loginTitle}>
        <h1>Create an account</h1>
        <h3>Wanna join us? Create your account!</h3>
      </div>
      <form onSubmit={trueForm.handleSubmit} className={s.loginForm__inputArea}>
        <InputAndLabel
          wrapperClassNames={['loginForm__inputBlock_smallMargin']}
          inputClassNames={['loginForm__input']}
          label="Phone"
          name="phoneNumber"
          type="tel"
          onChange={trueForm.handleChange}
          value={trueForm.values.phoneNumber}
          showError={!!trueForm.errors.phoneNumber}
          error={trueForm.errors.phoneNumber}
          isRequired={true}
          maxLength={16}
          placeholder={'Phone number'}
        />
        <InputAndLabel
          wrapperClassNames={['loginForm__inputBlock_smallMargin']}
          inputClassNames={['loginForm__input']}
          label="Email"
          type="text"
          name="email"
          onChange={trueForm.handleChange}
          value={trueForm.values.email}
          showError={!!trueForm.errors.email}
          error={trueForm.errors.email}
          maxLength={100}
          placeholder={'Email'}
        />
        <InputAndLabel
          wrapperClassNames={['loginForm__inputBlock_smallMargin']}
          inputClassNames={['loginForm__input']}
          label="Password"
          type="password"
          name="password"
          onChange={trueForm.handleChange}
          value={trueForm.values.password}
          showError={!!trueForm.errors.password}
          error={trueForm.errors.password}
          isRequired={true}
          maxLength={64}
          placeholder={'Password'}
        />
        <InputAndLabel
          wrapperClassNames={['loginForm__inputBlock_smallMargin']}
          inputClassNames={['loginForm__input']}
          label="Confirm password"
          type="password"
          name="confirmPassword"
          onChange={trueForm.handleChange}
          value={trueForm.values.confirmPassword}
          showError={!!trueForm.errors.confirmPassword}
          error={trueForm.errors.confirmPassword}
          isRequired={true}
          maxLength={64}
          placeholder={'Confirm password'}
        />
        <div className={s.loginForm__ContinueBlock}>
          <Button name="Continue" type="submit" />
          <div className={s.loginForm__postscriptum}>
            <p>
              Already have an account? <FormLinkToPage to="/login" text="Login" />
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
