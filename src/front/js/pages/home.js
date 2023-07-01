import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CarouselComp } from "../component/carouselComp";
import { PosterCarousel } from "../component/posterCarousel";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center ">
			<CarouselComp />
			
			<PosterCarousel view="topRated"/>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p>
		</div>
	);
};
