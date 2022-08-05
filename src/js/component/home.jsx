import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="my-5 d-flex flex-column flex-sm-row">
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
