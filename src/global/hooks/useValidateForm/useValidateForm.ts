import { useMemo, useState } from 'react';
import { getValidatedPhoneNumber } from './utils/getValidatedPhoneNumber';
import { isValidatedForm } from './utils/isValidatedForm';
import { IUseValidateFormArgs } from './utils/types';
import { IObjectSignature } from '@global/types/objectSignature';

export function useValidateForm<T extends IObjectSignature, V extends IObjectSignature>({
  validateOnChange,
  initialValues,
  validateInputs,
  submitForm,
  onInvalidFormSubmit
}: IUseValidateFormArgs<T, V>) {
  const [firstChangeExist, setFirstChangeExist] = useState(false);
  const [values, setValues] = useState(initialValues);
  const errors = useMemo(
    () => (firstChangeExist && validateOnChange ? validateInputs(values) : ({} as V)),
    [values, firstChangeExist]
  );

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (!firstChangeExist) {
      setFirstChangeExist(true);
    }

    e.preventDefault();
    const newValue = e.currentTarget.type === 'tel' ? getValidatedPhoneNumber(e) : e.currentTarget.value.toString();
    const inputName = e.currentTarget.name;

    setValues((prev: T) => {
      const newValues = prev;

      Object.keys(prev).forEach((key) => {
        if (key === inputName) {
          (newValues as IObjectSignature)[key] = newValue;
        }
      });

      return { ...newValues };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFirstChangeExist(true);

    if (!isValidatedForm(errors) && !onInvalidFormSubmit) return;

    if ((!isValidatedForm(errors) && !!onInvalidFormSubmit) || (!firstChangeExist && !!onInvalidFormSubmit)) {
      onInvalidFormSubmit();
      return;
    }

    submitForm(values);
  };

  return { values, errors, handleChange, handleSubmit };
}
