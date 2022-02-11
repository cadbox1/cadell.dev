import { style } from "@vanilla-extract/css";
import { fontBase, pClass } from "cadells-vanilla-components";

export const heroClass = style({
	padding: "64px 0 64px",
});

export const heroH1Class = style([
	fontBase,
	{ fontSize: "42px", marginBottom: "12px" },
]);

export const heroTextClass = style([
	pClass,
	{ fontSize: "20px", lineHeight: "1.8" },
]);
