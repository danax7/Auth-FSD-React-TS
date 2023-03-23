import { Link } from 'react-router-dom';
import { IFormLinkToPageProps } from '../utils/types/types';
import s from './style.module.scss';

const FormLinkToPage = ({ to, text }: IFormLinkToPageProps) => (
  <Link to={to} className={s.link}>
    {text}
  </Link>
);

export default FormLinkToPage;
