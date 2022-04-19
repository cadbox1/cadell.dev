import { style } from "@vanilla-extract/css";
import { headingClass } from "cadells-vanilla-components";

export const blogContainerClass = style({
	padding: "24px 0 12px",
	fontFamily: "Source Serif Pro",
});
export const blogHeadingClass = style([headingClass, { marginTop: "36px" }]);
export const blogAnchorClass = style({ textDecoration: "none" });
