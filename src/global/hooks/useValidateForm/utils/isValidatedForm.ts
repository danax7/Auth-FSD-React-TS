import { IObjectSignature } from '@global/types/objectSignature';

export function isValidatedForm<T extends IObjectSignature>(errors: T) {
  for (const key in errors) {
    if (errors[key] !== '') {
      return false;
    }
  }

  return true;
}
