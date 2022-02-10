import {
	navAnchorClass,
	navClass,
	ThemeToggle,
	themeToggleHeaderClass,
} from "cadells-vanilla-components";
import Link from "next/link";

export const Header = () => {
	return (
		<nav className={navClass}>
			<Link href="/">
				<a className={navAnchorClass}>Cadell.dev</a>
			</Link>
			<Link href="/blog">
				<a className={navAnchorClass}>Blog</a>
			</Link>
			<a href="https://github.com/cadbox1" className={navAnchorClass}>
				GitHub
			</a>
			<a href="https://twitter.com/cadellchristo" className={navAnchorClass}>
				Twitter
			</a>
			<ThemeToggle className={themeToggleHeaderClass} />
		</nav>
	);
};
