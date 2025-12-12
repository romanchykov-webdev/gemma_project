import { HomeApiResponse } from "@/lib/types/api";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://91.215.71.26/api";

export async function fetchHomeData(): Promise<HomeApiResponse> {
	const response = await fetch(`${API_BASE_URL}/home/`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		throw new Error(`API Error: ${response.status} ${response.statusText}`);
	}

	return response.json();
}
