import React from "react";

//retorna jsx
const Card = () => {
	let estilo = {
		width: "16rem",
	};
	return (
		<div>
			<div className="card" style={estilo}>
				<img
					className="card-img-top"
					src="https://image.shutterstock.com/shutterstock/photos/323592404/display_1500/stock-vector-picture-icon-323592404.jpg"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title"> Title</h5>
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec aliquam hendrerit diam.
					</p>
					<a href="#" className="btn btn-primary">
						more
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
