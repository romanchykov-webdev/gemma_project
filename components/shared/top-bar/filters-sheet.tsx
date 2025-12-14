"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { SlidersHorizontal } from "lucide-react";
import React, { JSX, useState } from "react";
import { Filters } from "../filters";

interface Props {
	className?: string;
}

export const FiltersSheet: React.FC<React.PropsWithChildren<Props>> = ({ className, children }): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				{children || (
					<Button variant="outline" size="icon" className="md:hidden">
						<SlidersHorizontal className="h-5 w-5" />
					</Button>
				)}
			</SheetTrigger>
			<SheetContent
				side="left"
				closeIconClassName="size-10 text-brand-primary"
				className="flex flex-col justify-between pb-0 bg-white sm:max-w-md w-full pl-6 overflow-y-auto"
			>
				<SheetHeader>
					<SheetTitle className="text-2xl font-bold ">Filters</SheetTitle>
					<VisuallyHidden>
						<SheetDescription>Filter products by ingredients, sizes, and price</SheetDescription>
					</VisuallyHidden>
				</SheetHeader>

				<div className="flex-1 overflow-y-auto scrollbar pr-12 pb-6">
					<Filters />
				</div>
			</SheetContent>
		</Sheet>
	);
};
