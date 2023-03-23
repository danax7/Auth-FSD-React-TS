import { LOCAL_STORAGE_PROFILE_FORM_KEY } from '../utils/constants/constants';
import { IFillProfileInfoProps } from '../utils/types/types';
import { IProfileInfoFormInitialValues } from '../utils/types/validation';
import { getFormErrors } from '../utils/validation/getFormErrors';
import { initialValues } from '../utils/validation/initialValues';
import Avatar from './img/Avatar.png';
import edit from './img/edit.svg';
import s from './style.module.scss';
import InputAndLabel from '@entities/InputAndLabel/ui/InputAndLabel';
import { getFromSessionStorage } from '@global/helpers/sessionStorageFunctions';
import { useValidateForm } from '@global/hooks/useValidateForm/useValidateForm';
import Button from '@shared/Button/ui/Button';

const FillProfileInfo = ({ onSubmit, onErrorSubmit }: IFillProfileInfoProps) => {
  const trueForm = useValidateForm({
    validateOnChange: true,
    initialValues: getFromSessionStorage(LOCAL_STORAGE_PROFILE_FORM_KEY, initialValues),
    validateInputs: getFormErrors,
    submitForm: (values: IProfileInfoFormInitialValues) => {
      onSubmit(values);
      sessionStorage.removeItem(LOCAL_STORAGE_PROFILE_FORM_KEY);
    },
    onInvalidFormSubmit: onErrorSubmit
  });

  return (
    <div className={`${s.loginForm} ${s.profileInfo}`}>
      <div className={s.loginForm__loginTitle}>
        <h1>Profile Info</h1>
        <h3>What will other people see</h3>
      </div>
      <form onSubmit={trueForm.handleSubmit} className={s.loginForm__inputArea}>
        <div className={s.avatarContainer}>
          <div className={s.avatarWrapper}>
            <img src={Avatar} alt="avatar" className={s.Avatar} />
            <img src={edit} alt="edit profile photo" className={s.edit} />
          </div>
          <div className={s.formAreaContainer}>
            <InputAndLabel
              wrapperClassNames={['loginForm__inputBlock_smallMargin']}
              inputClassNames={['loginForm__input']}
              label="Name"
              name="name"
              type="text"
              onChange={trueForm.handleChange}
              value={trueForm.values.name}
              showError={!!trueForm.errors.name}
              error={trueForm.errors.name}
              isRequired={true}
              maxLength={20}
            />
            <InputAndLabel
              wrapperClassNames={['loginForm__inputBlock_smallMargin']}
              inputClassNames={['loginForm__input']}
              label="Surname"
              name="surname"
              type="text"
              onChange={trueForm.handleChange}
              value={trueForm.values.surname}
              showError={!!trueForm.errors.surname}
              error={trueForm.errors.surname}
              isRequired={true}
              maxLength={20}
            />
          </div>
        </div>
        <InputAndLabel
          wrapperClassNames={['loginForm__inputBlock_smallMargin']}
          inputClassNames={['loginForm__input']}
          label="Username"
          name="username"
          type="text"
          onChange={trueForm.handleChange}
          value={trueForm.values.username}
          showError={!!trueForm.errors.username}
          error={trueForm.errors.username}
          isRequired={true}
          maxLength={20}
        />
        <InputAndLabel
          wrapperClassNames={['loginForm__inputBlock_smallMargin']}
          inputClassNames={['loginForm__input']}
          label="About"
          name="status"
          type="text"
          onChange={trueForm.handleChange}
          value={trueForm.values.status}
          showError={!!trueForm.errors.status}
          error={trueForm.errors.status}
          maxLength={120}
        />
        <div className={s.loginForm__ContinueBlock}>
          <Button name="Sign up" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default FillProfileInfo;
