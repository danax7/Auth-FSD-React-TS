import { IValidatedInputProps } from '@shared/ValidatedInput/utils/types/types';

export interface IInputAndLabelProps extends IValidatedInputProps {
  label: string;
  wrapperClassNames: string[];
  isRequired?: boolean;
  placeholder: string;
}
