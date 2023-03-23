export interface IButtonProps {
  name: string;
  action?: () => void;
  type?: 'button' | 'reset' | 'submit';
}
