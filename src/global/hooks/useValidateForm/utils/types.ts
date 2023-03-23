export interface IUseValidateFormArgs<T, V> {
  validateOnChange?: boolean;
  initialValues: T;
  validateInputs: (values: T) => V;
  submitForm: (values: T) => void;
  onInvalidFormSubmit?: () => void;
}
