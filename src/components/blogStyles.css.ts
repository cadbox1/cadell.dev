import { style } from "@vanilla-extract/css";
import { aClass, h2Class } from "cadells-vanilla-components";

export const blogContainerClass = style({
	padding: "24px 0 12px",
	fontFamily: "Source Serif Pro",
});
export const blogHeadingClass = style([h2Class, { marginTop: "36px" }]);
export const blogAnchorClass = style([aClass]);
