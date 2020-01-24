import React from "react";
import "../../styles/home.scss";
import { CardPeople } from "../component/cardPeople";
import { CardFilms } from "../component/cardFilms";

export const Home = () => (
	<div className="container testimonial-group">
		<h1>People</h1>
		<div className="row col-xs-6">
			<CardPeople />
		</div>
		<h1>Films</h1>
		<div className="row col-xs-6">
			<CardFilms />
		</div>
	</div>
);
