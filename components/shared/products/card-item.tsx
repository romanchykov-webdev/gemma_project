import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { JSX } from "react";

interface Props {
	className?: string;
	name: string;
	productId: number;
	image: string;
}

export const CardItem: React.FC<Props> = ({ className, name, productId, image }): JSX.Element => {
	return (
		<div className={cn("group flex flex-col h-full", className)}>
			{/* image */}
			<div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px] group-hover:shadow-md transition-all duration-300 ">
				<Image src={image} alt={name} width={100} height={100} className="object-contain" />
			</div>
		</div>
	);
};
