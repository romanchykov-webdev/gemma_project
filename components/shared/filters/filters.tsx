"use client";
import { cn } from "@/lib/utils";
import React, { JSX } from "react";
import { SelectFilter } from "../top-bar/selectFilter";

interface Props {
	className?: string;
}

export const Filters: React.FC<Props> = ({ className }): JSX.Element => {
	return (
		<div className={cn("", className)}>
			{/* select filter */}
			<div className="mb-5 ">
				<SelectFilter selectWriperClassName="w-full" />
			</div>
		</div>
	);
};
