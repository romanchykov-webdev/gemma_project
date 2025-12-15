"use client";
import { Product } from "@/lib/types/api";
import { cn } from "@/lib/utils";
import React, { JSX, useRef } from "react";
import { CardItem } from "..";

interface Props {
	className?: string;
	categoryId: number;
	title: string;
	items: Product[];
	isFirstCategory: boolean;
}

export const ProductsGroup: React.FC<Props> = ({
	className,
	categoryId,
	title,
	items,
	isFirstCategory,
}): JSX.Element => {
	const HEADER_OFFSET = 100; // высота sticky-зоны (TopBar + отступы)

	const intersectionRef = useRef<HTMLDivElement>(null);

	console.log(items);
	//
	return (
		<div className={className} id={title} ref={intersectionRef} style={{ scrollMarginTop: "120px" }}>
			<h2 className="text-2xl font-semibold mb-5">{title}</h2>

			{/* products list */}
			<div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4")}>
				{items.map((product) => {
					// const minPriceItem = product.items.reduce((min, item) => (item.price < min.price ? item : min));
					return (
						<CardItem key={product.id} name={product.name} productId={product.id} image={product.image} />
					);
				})}
			</div>
		</div>
	);
};
