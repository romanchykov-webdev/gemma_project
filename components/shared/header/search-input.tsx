"use client";
import { cn } from "@/lib/utils";
import { Loader2, Search } from "lucide-react";
import React, { JSX, useRef, useState } from "react";

interface Props {
	className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }): JSX.Element => {
	const [focused, setFocused] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const inputRef = useRef(null);

	return (
		<div ref={inputRef} className={cn("flex rounded-2xl flex-1 justify-between relative h-11", focused && "z-30")}>
			{/* <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" /> */}
			{isLoading ? (
				<Loader2 className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400 animate-spin" />
			) : (
				<Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
			)}
			<input
				className="rounded-2xl outline-none w-full bg-gray-50 pl-11"
				type="text"
				placeholder="Ricerca..."
				onFocus={() => setFocused(true)}
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
		</div>
	);
};
