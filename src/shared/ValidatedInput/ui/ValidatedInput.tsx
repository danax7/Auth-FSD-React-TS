import { useInfoHover } from '../utils/hooks/useInfoHover';
import { IValidatedInputProps } from '../utils/types/types';
import s from './style.module.scss';

const ValidatedInput = (props: IValidatedInputProps) => {
  const { type, name, value, onChange, inputClassNames, showError, error, maxLength, placeholder } = props;
  const {
    showErrorModal,
    onMouseModalEnter,
    onMouseInfoImageEnter,
    onMouseModalLeave,
    onMouseInfoImageLeave,
    onMouseInfoClick
  } = useInfoHover();

  return (
    <div className={s.inputBlock}>
      <input
        value={value}
        name={name}
        onChange={onChange}
        className={[...inputClassNames, 'formInput'].join(' ')}
        type={type}
        maxLength={maxLength}
        placeholder={placeholder}
      />
      {showError && (
        <div
          className={s.info}
          onMouseEnter={onMouseInfoImageEnter}
          onMouseLeave={onMouseInfoImageLeave}
          onClick={onMouseInfoClick}
        >
          +
        </div>
      )}
      {showErrorModal && showError && (
        <div className={s.errorText} onMouseEnter={onMouseModalEnter} onMouseLeave={onMouseModalLeave}>
          {error}
        </div>
      )}
    </div>
  );
};

export default ValidatedInput;
