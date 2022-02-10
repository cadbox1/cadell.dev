import { style } from "@vanilla-extract/css";
import { fontBase, headingClass } from "cadells-vanilla-components";

export const blogContainerClass = style({ padding: "24px 0 12px" });
export const blogHeadingClass = style([headingClass, { marginTop: "36px" }]);
export const blogAnchorClass = style([fontBase, { textDecoration: "none" }]);
