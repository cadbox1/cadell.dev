import { A, P } from "cadells-vanilla-components";
import { heroClass, heroH1Class, heroTextClass } from "./styles.css";

export const Hero = () => {
	return (
		<div className={heroClass}>
			<h1 className={heroH1Class}>
				I build awesome teams and awesome products.
			</h1>
			<p className={heroTextClass}>
				My name is Cadell Christo and you can find me on{" "}
				<A href="https://github.com/cadbox1">GitHub</A>,{" "}
				<A href="https://twitter.com/cadellchristo">Twitter</A> and{" "}
				<A href="https://www.linkedin.com/in/cadell-christo-551146109/">
					LinkedIn
				</A>{" "}
				or email me at <A href="mailto:hello@cadell.dev">hello@cadell.dev</A>.
			</p>
			<p className={heroTextClass}>Hit me up if you want to chat 🙂</p>
		</div>
	);
};
