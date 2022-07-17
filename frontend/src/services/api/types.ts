import {
  BaseQueryApi,
  QueryReturnValue,
} from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/dist/query";

import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";

export type ApiEndpointBuilder = EndpointBuilder<
  (
    args: string | FetchArgs,
    api: BaseQueryApi,
    extraOptions: any
  ) => Promise<
    QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>
  >,
  string,
  "api"
>;
