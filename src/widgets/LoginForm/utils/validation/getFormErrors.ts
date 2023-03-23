import { ILoginFormErrors, ILoginFormValues } from '../types/validate';
import { passwordRegexp, phoneRegexp } from '@global/regexp/regexp';

export const getFormErrors = (values: ILoginFormValues): ILoginFormErrors => {
  const errors: ILoginFormErrors = {};

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
  return errors;
};
