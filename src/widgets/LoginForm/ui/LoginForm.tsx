import { ILoginFormProps } from '../utils/types/types';
import { ILoginFormValues } from '../utils/types/validate';
import { getFormErrors } from '../utils/validation/getFormErrors';
import { initialValues } from '../utils/validation/initialValues';
import './style.scss';
import InputAndLabel from '@entities/InputAndLabel/ui/InputAndLabel';
import { useValidateForm } from '@global/hooks/useValidateForm/useValidateForm';
import Button from '@shared/Button/ui/Button';
import FormLinkToPage from '@shared/FormLinkToPage/ui/FormLinkToPage';

const LoginForm = ({ onSubmit, setIsForgot, onErrorSubmit }: ILoginFormProps) => {
  const trueForm = useValidateForm({
    validateOnChange: true,
    initialValues: initialValues,
    submitForm(values: ILoginFormValues) {
      onSubmit(values);
    },
    validateInputs: getFormErrors,
    onInvalidFormSubmit: onErrorSubmit
  });

  return (
    <form className={'loginForm'} onSubmit={trueForm.handleSubmit}>
      <h2 className={'loginForm__title'}>Welcome back</h2>
      <p className={'loginForm__subtitle'}>login to your account</p>
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
        maxLength={16}
      />
      <InputAndLabel
        wrapperClassNames={['loginForm__inputBlock_smallMargin']}
        inputClassNames={['loginForm__input']}
        label="Password"
        name="password"
        type="password"
        onChange={trueForm.handleChange}
        value={trueForm.values.password}
        showError={!!trueForm.errors.password}
        error={trueForm.errors.password}
        maxLength={64}
      />

      <div onClick={() => setIsForgot(true)} className={'loginForm__forgotPassword'}>
        Forgot Password?
      </div>
      <Button name="Login" type="submit" />
      <p className={'loginForm__registration'}>
        Not registered yet? <FormLinkToPage to="/register" text="Create an account" />
      </p>
    </form>
  );
};

export default LoginForm;
