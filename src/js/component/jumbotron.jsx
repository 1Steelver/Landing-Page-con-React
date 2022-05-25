import React from "react";

//retorna jsx
const Jumbotron = () => {
	return (
		<div>
			<div class="jumbotron">
				<h1 className="display-4">A warm welcome!</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec aliquam hendrerit diam. Quisque ac laoreet turpis.
					Proin justo quam, bibendum et luctus non, varius ut eros.
				</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Find out more
					</a>
				</p>
			</div>
		</div>
	);
};

export default Jumbotron;
