import { IObjectSignature } from '@global/types/objectSignature';

export interface IProfileInfoFormInitialValues extends IObjectSignature {
  name: string;
  surname: string;
  username: string;
  status: string;
}

export interface IProfileInfoFormErrors extends IObjectSignature {
  name?: string;
  surname?: string;
  username?: string;
  status?: string;
}
