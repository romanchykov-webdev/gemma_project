import { Category } from "@/lib/types/api";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { JSX } from "react";

interface Props {
	className?: string;
	items: Category[];
}

export const Categories: React.FC<Props> = ({ className, items }): JSX.Element => {
	console.log(items);

	return (
		<div className={cn("", className)}>
			{" "}
			{items.map((item) => (
				<div key={item.id}>
					<Link href={`/category/${item.id}`}>{item.name}</Link>
				</div>
			))}{" "}
		</div>
	);
};
