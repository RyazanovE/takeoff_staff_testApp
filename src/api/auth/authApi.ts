import { mainApi } from "api/main/mainApi";
import { LOGIN_URL } from "api/urls/urls";

export interface ILoginResult {
  accessToken: string;
  user: {
    email: string;
    id: 1;
  };
}

export interface ILoginParams {
  email: string;
  password: string;
}

export const authApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<ILoginResult, ILoginParams>({
      query: (data) => ({ url: LOGIN_URL, method: "post", data }),
    }),
  }),
});

export const { useLoginMutation } = authApi;

export const { login } = authApi.endpoints;
