import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "91.215.71.26",
				port: "",
				pathname: "/media/**",
			},
		],
	},
};

export default nextConfig;
