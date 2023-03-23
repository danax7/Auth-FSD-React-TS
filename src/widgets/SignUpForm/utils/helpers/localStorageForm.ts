import { LOCAL_STORAGE_SIGN_UP_KEY } from '../constants/constants';
import { ISignUpFormInitialValues } from '../types/validation';
import { setToSessionStorage } from '@global/helpers/sessionStorageFunctions';

export const setValuesToSessionStorage = (values: ISignUpFormInitialValues) => {
  setToSessionStorage(LOCAL_STORAGE_SIGN_UP_KEY, { ...values, password: '', confirmPassword: '' });
};
