import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "api/base-query/baseQuery";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: baseQuery({ baseUrl: "http://localhost:3004/" }),
  endpoints: (build) => ({}),
});

