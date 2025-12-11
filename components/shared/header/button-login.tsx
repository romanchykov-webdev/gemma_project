import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { JSX } from "react";

interface Props {
	className?: string;
}

export const ButtonLogin: React.FC<Props> = ({ className }): JSX.Element => {
	return (
		<div className={cn("", className)}>
			<Button>Login</Button>
		</div>
	);
};
