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
			<Link href="/" passHref legacyBehavior>
				<a className={navAnchorClass}>Cadell.dev</a>
			</Link>
			<Link href="/blog" passHref legacyBehavior>
				<a className={navAnchorClass}>Blog</a>
			</Link>
			<a href="https://github.com/cadbox1" className={navAnchorClass}>
				GitHub
			</a>
			<Link href="/resume" passHref legacyBehavior>
				<a className={navAnchorClass}>Resume</a>
			</Link>
			<ThemeToggle className={themeToggleHeaderClass} />
		</nav>
	);
};
