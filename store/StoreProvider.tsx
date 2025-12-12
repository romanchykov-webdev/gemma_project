"use client";

import type { HomeApiResponse } from "@/lib/types/api";
import { useMemo } from "react";
import { Provider } from "react-redux";
import { homeApi } from "./api/home-api";
import { makeStore } from "./index";

interface StoreProviderProps {
	children: React.ReactNode;
	initialData?: HomeApiResponse;
}

export default function StoreProvider({ children, initialData }: StoreProviderProps) {
	const store = useMemo(() => {
		const storeInstance = makeStore();

		// Инициализируем кэш RTK Query с серверными данными
		if (initialData) {
			storeInstance.dispatch(homeApi.util.upsertQueryData("getHomeData", undefined, initialData));
		}

		return storeInstance;
	}, [initialData]);

	return <Provider store={store}>{children}</Provider>;
}
