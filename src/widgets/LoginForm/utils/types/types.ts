import { ILoginFormValues } from './validate';

export interface ILoginFormProps {
  onSubmit: (values: ILoginFormValues) => void;
  setIsForgot: React.Dispatch<React.SetStateAction<boolean>>;
  onErrorSubmit: () => void;
}
