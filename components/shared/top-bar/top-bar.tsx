"use client";
import { Category } from "@/lib/types/api";
import { cn } from "@/lib/utils";
import { useCategoriStore } from "@/store/category";
import React, { JSX } from "react";
import { Container } from "../container";
import { Categories } from "./categories";
import { FiltersSheet } from "./filters-sheet";
import { SelectFilter } from "./selectFilter";

interface Props {
	className?: string;
	categories: Category[];
}

export const TopBar: React.FC<Props> = ({ className, categories }): JSX.Element => {
	//
	const activeId = useCategoriStore((state) => state.activeId);
	const setActiveId = useCategoriStore((state) => state.setActiveId);

	return (
		<div className={cn("sticky top-0 py-5 bg-white shadow-lg shadow-black/5 z-10 ", className)}>
			<Container className="flex  items-center justify-between gap-5 mb-5">
				<div className="flex-1">
					<h2 className="text-2xl font-bold ">Categorie</h2>
				</div>
				<FiltersSheet />
			</Container>

			<Container className="flex  items-center justify-between gap-5">
				{/* categories */}
				<Categories items={categories} activeId={activeId} setActiveId={setActiveId} />

				{/* sort popup */}
				<div className="hidden md:block">
					<SelectFilter />
				</div>
			</Container>
		</div>
	);
};
