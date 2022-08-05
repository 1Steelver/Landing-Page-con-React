import React from "react";

//retorna jsx
const Footer = () => {
	let estilo = {
		width: "100%",
	};
	return (
		<div className="bg-dark text-white text-center p-5 mt-4" style={estilo}>
			Copyright © STEELVER 2022
		</div>
	);
};

export default Footer;
