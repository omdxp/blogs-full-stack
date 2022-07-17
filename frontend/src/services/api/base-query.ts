import { FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

import { BaseQueryApi } from "@reduxjs/toolkit/dist/query/baseQueryTypes";

const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:8080" });

export const apiBaseQuery = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: any
) => {
  return await baseQuery(args, api, extraOptions);
};
