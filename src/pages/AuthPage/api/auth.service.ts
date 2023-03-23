import { AxiosResponse } from 'axios';
import { BASE_AUTH_SUB_URL } from './constants';
import { appInstance } from '@global/api/instance';
import { IRegisterFormValues } from '@pages/SignUpPage/utils/type/types';
import { ILoginFormValues } from '@widgets/LoginForm/utils/types/validate';

export const AuthService = {
  async register(signupForm: IRegisterFormValues) {
    return await appInstance.post<IRegisterFormValues, AxiosResponse<null>>(
      `${BASE_AUTH_SUB_URL}/register`,
      signupForm,
      {
        headers: { Cookie: '' }
      }
    );
  },

  async login(loginForm: ILoginFormValues) {
    return await appInstance.post<ILoginFormValues, AxiosResponse<null>>(`${BASE_AUTH_SUB_URL}/login`, loginForm);
  },

  async token() {
    return await appInstance.post<null, AxiosResponse<null>>(`${BASE_AUTH_SUB_URL}/token`);
  },

  async logout() {
    return await appInstance.post<null, AxiosResponse<null>>(`${BASE_AUTH_SUB_URL}/logout`);
  },

  async main() {
    return await appInstance.post(`${BASE_AUTH_SUB_URL}/main`);
  }
};
