import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { JSX } from "react";

interface Props {
	className?: string;
	title: string;
	iconButon?: React.ReactNode;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonAddToCart: React.FC<Props> = ({ className, title, iconButon, onClick }): JSX.Element => {
	return (
		<Button className={cn(" text-white text-shadow-2xs ", className)} onClick={onClick}>
			{iconButon ? <p className="mr-2 ">{iconButon}</p> : null}

			{title ? <p className="text-xl font-bold  ">{title}</p> : null}
		</Button>
	);
};
