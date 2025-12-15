"use client";

interface Props {
	children: React.ReactNode;
}

export default function StoreProvider({ children }: Props) {
	return <>{children}</>;
}
