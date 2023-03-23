import { useState } from 'react';
import s from './style.module.scss';
import InputAndLabel from '@entities/InputAndLabel/ui/InputAndLabel';
import Button from '@shared/Button/ui/Button';

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');

  return (
    <div className={s.passwordRecovery}>
      <h2 className={s.passwordRecovery__title}>Forgot password</h2>
      <p className={s.passwordRecovery__subtitle}>
        Please enter your email address. You will receive a link to create a new password via email
      </p>
      <InputAndLabel
        wrapperClassNames={['loginForm__inputBlock_bigMargin']}
        inputClassNames={[s.loginForm__input]}
        label="Your email"
        value={email}
        onChange={setEmail}
        type="text"
      />
      <Button name="Send" action={() => {}} />
    </div>
  );
};

export default PasswordRecovery;
