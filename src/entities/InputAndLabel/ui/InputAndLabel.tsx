import { IInputAndLabelProps } from '../utils/types/types';
import s from './style.module.scss';
import ValidatedInput from '@shared/ValidatedInput/ui/ValidatedInput';

const InputAndLabel = (props: IInputAndLabelProps) => {
  const { label, wrapperClassNames, isRequired, ...otherProps } = props;

  return (
    <div className={wrapperClassNames.join(' ')}>
      <ValidatedInput {...otherProps} placeholder={isRequired ? `${label} *` : label} />
    </div>
  );
};

export default InputAndLabel;
