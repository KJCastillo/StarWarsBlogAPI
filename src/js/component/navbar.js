import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" href="#">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlqRZMjCFdLQauXHu1QRX9TgC2tXBsFgA79_GnoGfiVaO__4-n&s"
					width="100px"
					height="50px"
					alt="star wars"
				/>
			</a>
			<div className="dropdown show">
				<a
					className="btn btn-dark dropdown-toggle"
					href="#"
					role="button"
					id="dropdownMenuLink"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Dropdown link
				</a>

				<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
					{store.favorites.map(el => {
						return el;
					})}
				</div>
			</div>
		</nav>
	);
};
