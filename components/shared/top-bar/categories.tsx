import { Category } from "@/lib/types/api";
import { cn } from "@/lib/utils";
import React, { JSX } from "react";

interface Props {
	className?: string;
	items: Category[];
	activeId: number;
	setActiveId: (activeId: number) => void;
}

export const Categories: React.FC<Props> = ({ className, items, activeId, setActiveId }): JSX.Element => {
	// console.log(items);

	const handleCategory = (e: React.MouseEvent<HTMLAnchorElement>, categoryId: number) => {
		e.preventDefault();
		setActiveId(categoryId);
	};

	return (
		<div
			className={cn(
				"flex gap-2 bg-gray-50 p-2 rounded-2xl overflow-x-auto scrollbar-hidden flex-nowrap",
				className
			)}
		>
			{items.map((category) => (
				<a
					className={cn(
						"flex items-center font-bold h-11 rounded-2xl px-5 md:text-sm hover:text-brand-primary",
						activeId === category.id && "bg-white shadow-md shadow-gray-200 text-brand-primary"
					)}
					key={category.id}
					href={`#${category.name}`}
					onClick={(e) => handleCategory(e, category.id)}
				>
					{category.name}
				</a>
			))}
		</div>
	);
};
