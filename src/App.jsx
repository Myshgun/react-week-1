import { createElement, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export const App = () => {
	// Императивный
	const [count, setCount] = useState(0);

	const currentYear = new Date().getFullYear();

	const div = createElement(
		"div",
		null,
		createElement(
			"a",
			{ href: "https://vite.dev", target: "_blank" },
			createElement(
				"img",
				{ src: viteLogo, className: "logo", alt: "Vite logo" },
				null
			)
		),
		createElement(
			"a",
			{ href: "https://react.dev", target: "_blank" },
			createElement(
				"img",
				{ src: reactLogo, className: "logo react", alt: "React logo" },
				null
			)
		)
	);

	const h1 = createElement("h1", null, "Vite + React");

	const divCard = createElement(
		"div",
		{ className: "card" },
		createElement(
			"button",
			{ onClick: () => setCount((count) => count + 1) },
			`count is ${count}`
		),
		createElement("p", null, "Edit src/App.jsx and save to test HMR.")
	);

	const pRead = createElement(
		"p",
		{ className: "read-the-docs" },
		"Click on the Vite and React logos to learn more."
	);

	const pYear = createElement("p", null, currentYear);

	const divRoot = createElement("div", null, div, h1, divCard, pRead, pYear);

	return divRoot;
};
