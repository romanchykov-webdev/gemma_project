import { cn } from "@/lib/utils";
import React from "react";

import { Container } from "../container";
import { CartButton } from "./button-card";
import { ButtonLogin } from "./button-login";
import { Logo } from "./logo";
import { SearchInput } from "./search-input";

interface Props {
	className?: string;
	hasSearch?: boolean;
}

export const Header: React.FC<Props> = ({ className, hasSearch }) => {
	return (
		<div className="py-4 border-b">
			<Container
				className={cn(
					"flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-4 md:py-8 ",
					className
				)}
			>
				<div className="flex flex-col md:flex-row md:items-center md:gap-10 w-full">
					<div className="flex justify-center md:justify-start">
						<Logo />
					</div>

					{hasSearch && (
						<div className="mt-4 md:mt-0 md:flex-1">
							<SearchInput />
						</div>
					)}
				</div>
				<div className="flex items-center gap-2 justify-center">
					<ButtonLogin />
					<CartButton />
				</div>
			</Container>
		</div>
	);
};
