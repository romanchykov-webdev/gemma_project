import { Category } from "@/lib/types/api";
import { cn } from "@/lib/utils";
import React, { JSX } from "react";
import { Container } from "../container";
import { Categories } from "./categories";

interface Props {
	className?: string;
	categories: Category[];
}

export const TopBar: React.FC<Props> = ({ className, categories }): JSX.Element => {
	return (
		<div
			className={cn(
				"sticky top-0 py-5 bg-white shadow-lg shadow-black/5 z-10 overflow-x-auto scrollbar",
				className
			)}
		>
			<Container className="flex items-center justify-between">
				{/* categories */}
				<Categories categories={categories} />

				{/* sort popup */}
			</Container>
		</div>
	);
};
