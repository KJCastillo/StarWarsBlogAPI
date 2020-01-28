import React from "react";
import "../../styles/home.scss";
import { CardPeople } from "../component/cardPeople";
import { CardFilms } from "../component/cardFilms";
import { CardPlanets } from "../component/cardPlanets";

export const Home = () => (
	<div className="container testimonial-group">
		<h1>Characters</h1>
		<div className="row col-xs-6">
			<CardPeople />
		</div>
		<h1>Films</h1>
		<div className="row col-xs-6">
			<CardFilms />
		</div>
		<h1>Planets</h1>
		<div className="row col-xs-6">
			<CardPlanets />
		</div>
	</div>
);
