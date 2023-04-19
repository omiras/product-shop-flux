import React from "react";
import "../../styles/home.css";
import { Product } from "../component/product";

export const Home = () => {
	return <div className="wrapper">
		<div className="container">
			<div className="row g-1">
				<div className="col-md-3">
				<Product title="rábanos" price="10" image={'https://i.imgur.com/w2rCsEw.jpg'}/>
				<Product title="panocha" price="20" image={'https://i.imgur.com/ZRUetRF.jpg'}/>
				</div>
			</div>
		</div>
	</div>
};
