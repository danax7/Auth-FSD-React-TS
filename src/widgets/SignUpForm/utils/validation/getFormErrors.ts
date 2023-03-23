import { setValuesToSessionStorage } from '../helpers/localStorageForm';
import { ISignUpFormErrors, ISignUpFormInitialValues } from '../types/validation';
import { emailRegexp, passwordRegexp, phoneRegexp } from '@global/regexp/regexp';

export const getFormErrors = (values: ISignUpFormInitialValues): ISignUpFormErrors => {
  setValuesToSessionStorage(values);
  const errors: ISignUpFormErrors = {};

  Object.keys(values).forEach((key) => {
    if (values[key] === '' && key !== 'email') {
      errors[key] = 'required';
    }
  });

  // phone
  if (!phoneRegexp.test(values.phoneNumber) && values.phoneNumber !== '') {
    errors.phoneNumber = '+7 XXX XXX XX XX';
  }

  // password
  if ((values.password.length < 8 || values.password.length > 64) && values.password !== '') {
    errors.password = 'length must be from 8 to 64';
  } else if (!passwordRegexp.test(values.password) && values.password !== '') {
    errors.password = 'invalid password';
  }

  // email
  if (!emailRegexp.test(values.email) && values.email !== '') {
    errors.email = 'invalid email';
  }

  // confirm password
  if (values.password !== values.confirmPassword && values.confirmPassword !== '') {
    errors.confirmPassword = 'passwords should be the same';
  }

  return errors;
};
