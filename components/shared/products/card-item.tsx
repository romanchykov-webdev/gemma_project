import { ButtonAddToCart } from "@/components/shared/products";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { JSX } from "react";

interface Props {
	className?: string;
	name: string;
	productId: number;
	image: string;
	ingredients: string[];
	price: number;
}

export const CardItem: React.FC<Props> = ({ className, name, productId, image, ingredients, price }): JSX.Element => {
	//

	const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>, productId: number) => {
		e.preventDefault();
		// e.stopPropagation();
		console.log("add to cart", productId);
	};

	//
	return (
		<Link
			href={`/products/${productId}`}
			className={cn(
				"group flex flex-col h-full justify-between gap-5 bg-secondary rounded-lg hover:shadow-lg transition-all duration-500 ",
				className
			)}
		>
			{/* image */}
			<div className="flex    w-full items-center justify-center rounded-lg   h-[260px] ">
				<Image
					src={image}
					alt={name}
					width={215}
					height={215}
					className=" object-cover group-hover:scale-105 transition-all duration-300"
				/>
			</div>

			<div className="flex flex-col gap-5 p-3">
				{/* name description */}
				<div className="">
					{/* name */}
					<h4 className="text-2xl font-bold ">{name}</h4>

					{/* description */}
					<p className="text-sm text-gray-400">{ingredients.join(", ")}</p>
				</div>

				{/* price and add to cart button */}
				<div className="flex items-center justify-between ">
					{/* price */}
					<p className="text-xl font-bold">{price} €</p>

					{/* button add to cart */}
					<ButtonAddToCart
						className="group-hover:opacity-100 opacity-80 transition-all duration-500"
						iconButon={<PlusIcon />}
						title={"Aggiungere"}
						onClick={(e) => handleAddToCart(e, productId)}
					/>
				</div>
			</div>
		</Link>
	);
};
