export interface IValidatedInputProps {
  type: string;
  value?: string;
  name: string;
  inputClassNames: string[];
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  showError: boolean;
  error?: string;
  maxLength: number;
  placeholder: string;
}
