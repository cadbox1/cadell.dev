/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { useColorMode } from "theme-ui";

const navItemStyles = {
	mx: 12,
	fontWeight: 600,
	fontSize: 22,
	textDecoration: "none",
	color: "text",
};

const navItemActiveStyles = {
	textDecoration: "underline",
	cursor: "default",
};

export default ({ title }) => {
	const [colorMode, setColorMode] = useColorMode();
	const isDark = colorMode === `dark`;
	const toggleColorMode = e => {
		setColorMode(isDark ? `light` : `dark`);
	};

	return (
		<nav
			sx={{
				display: "flex",
				maxWidth: `container`,
				mx: `auto`,
				px: 3,
				py: 2,
				mb: 6,
			}}
		>
			<div sx={{ mx: -12 }}>
				<Link to={`/`} sx={navItemStyles} activeStyle={navItemActiveStyles}>
					{title}
				</Link>
				<Link to={`/blog`} sx={navItemStyles} activeStyle={navItemActiveStyles}>
					Blog
				</Link>
			</div>

			<div sx={{ ml: "auto" }}>
				<button
					onClick={toggleColorMode}
					sx={{
						fontWeight: "bold",
						fontSize: 16,
						backgroundColor: "muted",
						py: 3,
						px: 4,
						color: "text",
						border: "none",
						cursor: "pointer",
					}}
				>
					{isDark ? "Dark" : "Light"}
				</button>
			</div>
		</nav>
	);
};
