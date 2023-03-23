import { useEffect } from 'react';
import { APPEARENCE_DURATION, TOAST_DURATION } from '../utils/constants/constants';
import { useToast } from '../utils/hooks/useToast';
import { IToastMessageProps } from '../utils/types/types';
import s from './style.module.scss';

const ToastMessage = ({ isError, isSuccess, message, onHidden }: IToastMessageProps) => {
  const { showMessage, hideMessage } = useToast(TOAST_DURATION, APPEARENCE_DURATION);
  const classNames = [s.toastWrapper, !showMessage && s.hidden, isError && s.error, isSuccess && s.success].join(' ');

  useEffect(() => {
    if (hideMessage) {
      onHidden();
    }
  }, [hideMessage]);

  return message !== '' ? <div className={classNames}>{message}</div> : <></>;
};

export default ToastMessage;
