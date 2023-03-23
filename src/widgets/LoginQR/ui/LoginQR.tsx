import testQR from './img/testQR.png';
import s from './style.module.scss';

const LoginQR = () => (
  <div className={s.loginQR}>
    <div className={s.loginQR__image}>
      <img src={testQR} alt="QR" />
    </div>
    <h2 className={s.loginQR__title}>Login with QR</h2>
    <p className={s.loginQR__subtitle}>Scan QR code with the mobile app to login</p>
  </div>
);

export default LoginQR;
