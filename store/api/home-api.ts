import { HomeApiResponse } from "@/lib/types/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://91.215.71.26/api";

export const homeApi = createApi({
	reducerPath: "homeApi",
	baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
	tagTypes: ["Home"],
	endpoints: (builder) => ({
		getHomeData: builder.query<HomeApiResponse, void>({
			query: () => "/home/",
			providesTags: ["Home"],
		}),
	}),
});

export const { useGetHomeDataQuery } = homeApi;
