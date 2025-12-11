import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import React, { JSX } from "react";

interface Props {
	className?: string;
}

export const Logo: React.FC<Props> = ({ className }): JSX.Element => {
	return (
		// <Container>
		<div className={cn("", className)}>
			<Link href="/" className="flex items-center gap-2">
				<Image src="/logo.png" alt="Logo" width={40} height={40} />

				<div>
					<h2 className="text-xl md:text-2xl uppercase font-bold">GEMMA</h2>
					<p className="text-xs md:text-sm text-gray-400 leading-3">
						non potrebbe essere <br /> più delizioso
					</p>
				</div>
			</Link>
		</div>
		// </Container>
	);
};
