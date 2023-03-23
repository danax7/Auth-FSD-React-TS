import { LOCAL_STORAGE_PROFILE_FORM_KEY } from '../constants/constants';
import { IProfileInfoFormErrors, IProfileInfoFormInitialValues } from '../types/validation';
import { setToSessionStorage } from '@global/helpers/sessionStorageFunctions';
import { nameRegexp, statusRegexp, surnameRegexp, usernameRegexp } from '@global/regexp/regexp';

export const getFormErrors = (values: IProfileInfoFormInitialValues) => {
  setToSessionStorage(LOCAL_STORAGE_PROFILE_FORM_KEY, values);
  const errors: IProfileInfoFormErrors = {};

  Object.keys(values).forEach((key) => {
    if (values[key] === '' && key !== 'status') {
      errors[key] = 'required';
    }
  });

  // name
  if (values.name && values.name[0].toUpperCase() !== values.name[0]) {
    errors.name = `use first '${values.name[0].toUpperCase()}' instead of '${values.name[0]}'`;
  } else if (!nameRegexp.test(values.name) && values.name !== '') {
    errors.name = 'invalid name';
  } else if (values.name.length > 20) {
    errors.name = 'max length: 20';
  }

  // surname
  if (values.surname && values.surname[0].toUpperCase() !== values.surname[0]) {
    errors.surname = `use first '${values.surname[0].toUpperCase()}' instead of '${values.surname[0]}'`;
  } else if (!surnameRegexp.test(values.surname) && values.surname !== '') {
    errors.surname = 'invalid surname';
  } else if (values.surname.length > 20) {
    errors.surname = 'max length: 20';
  }

  // username
  if (!usernameRegexp.test(values.username) && values.username !== '') {
    errors.username = 'invalid user name';
  } else if ((values.username.length > 20 || values.username.length < 5) && values.username !== '') {
    errors.username = 'length must be from 5 to 20';
  }

  // status
  if (!statusRegexp.test(values.status)) {
    errors.status = 'invalid status';
  } else if (values.status.length > 120) {
    errors.status = 'max length 120';
  }

  return errors;
};
