import { configureStore } from "@reduxjs/toolkit";
import { homeApi } from "./api/home-api";

export const makeStore = () => {
	return configureStore({
		reducer: {
			[homeApi.reducerPath]: homeApi.reducer,
		},
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(homeApi.middleware),
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
