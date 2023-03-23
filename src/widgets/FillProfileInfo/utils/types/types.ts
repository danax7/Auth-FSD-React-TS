import { IProfileInfoFormInitialValues } from './validation';

export interface IFillProfileInfoProps {
  onSubmit: (formValue: IProfileInfoFormInitialValues) => void;
  onErrorSubmit: () => void;
}
