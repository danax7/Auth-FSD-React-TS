import { IObjectSignature } from '@global/types/objectSignature';

export interface ILoginFormValues extends IObjectSignature {
  phoneNumber: string;
  password: string;
}

export interface ILoginFormErrors extends IObjectSignature {
  phoneNumber?: string;
  password?: string;
}
