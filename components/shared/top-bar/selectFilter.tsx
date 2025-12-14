import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import React, { JSX } from "react";

interface Props {
	className?: string;
	selectWriperClassName?: string;
}

export const SelectFilter: React.FC<Props> = ({ className, selectWriperClassName }): JSX.Element => {
	return (
		<div className={cn("", className)}>
			<Select>
				<SelectTrigger className={cn("w-[180px]", selectWriperClassName)}>
					<SelectValue placeholder="Filter per ..." />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Filter</SelectLabel>
						<SelectItem value="price_up">Prezzo ↓</SelectItem>
						<SelectItem value="price_down">Prezzo ↑</SelectItem>
						<SelectItem value="news">Nuovo</SelectItem>
						<SelectItem value="popular">Popolare</SelectItem>
						<SelectItem value="sale">In offerta</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
};
