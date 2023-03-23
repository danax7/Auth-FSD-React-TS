import { AxiosResponse } from 'axios';

export interface IAuthHook {
  asyncFunction: () => Promise<AxiosResponse<any, any>>;
  duration: number;
}
