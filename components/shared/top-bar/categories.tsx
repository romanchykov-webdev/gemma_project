import { Category } from "@/lib/types/api";
import { cn } from "@/lib/utils";
import React, { JSX } from "react";

interface Props {
	className?: string;
	items: Category[];
}

export const Categories: React.FC<Props> = ({ className }): JSX.Element => {
	return <div className={cn("", className)}></div>;
};
