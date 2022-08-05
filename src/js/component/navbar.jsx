import React from "react";

//retorna jsx
const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-dark">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo01"
					aria-controls="navbarTogglerDemo01"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					class="collapse navbar-collapse d-flex justify-content-between"
					id="navbarTogglerDemo01">
					<a className="navbar-brand text-white" href="#">
						L_P Bootstrap
					</a>
					<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
						<li class="nav-item active">
							<a className="nav-link text-white" href="#">
								Home <span class="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
