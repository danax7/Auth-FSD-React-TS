import { to } from '@global/helpers/awaitToFunction';
import { AuthService } from '@pages/AuthPage/api/auth.service';

export const checkIsAuth = async () => {
  const [error, response] = await to(AuthService.token());

  return !error;
};
