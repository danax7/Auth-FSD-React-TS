import { IButtonProps } from '../utils/types/types';
import s from './style.module.scss';

const Button = (props: IButtonProps) =>
  props.action !== undefined ? (
    <button onClick={props.action} className={s.Button} type={props.type !== undefined ? props.type : 'button'}>
      <span className={s.Button__text}>{props.name}</span>
    </button>
  ) : (
    <button className={s.Button} type={props.type !== undefined ? props.type : 'button'}>
      <span className={s.Button__text}>{props.name}</span>
    </button>
  );

export default Button;
