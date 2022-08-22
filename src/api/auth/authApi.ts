import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "api/base-query/baseQuery";
import { mainApi } from "api/main/mainApi";

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
      query: (data) => ({ url: "login", method: "post", data }),
    }),
  }),
});

export const { useLoginMutation } = authApi;

export const { login } = authApi.endpoints;
