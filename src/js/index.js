//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
// import { Home } from "./component/home.js";
import { Navbar } from "./component/navbar.js";
import { Container } from "./component/container.js";

//render your react application
ReactDOM.render(
	<>
		<Navbar />
		<Container />
	</>,
	document.querySelector("#app")
);
