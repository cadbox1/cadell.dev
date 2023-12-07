import { style } from "@vanilla-extract/css";
import { navClass as cadellsNavClass } from "cadells-vanilla-components";

export const navClass = style([
	cadellsNavClass,
	{
		"@media": {
			print: {
				display: "none !important",
			},
		},
	},
]);
