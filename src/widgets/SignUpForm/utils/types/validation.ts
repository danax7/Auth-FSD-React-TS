import { IObjectSignature } from '@global/types/objectSignature';

export interface ISignUpFormInitialValues extends IObjectSignature {
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ISignUpFormErrors extends IObjectSignature {
  phoneNumber?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}
