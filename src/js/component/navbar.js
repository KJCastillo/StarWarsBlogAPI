import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
					<a className="dropdown-item pl-2 pr-1" href="#">
						Jedi
					</a>
					<a className="dropdown-item pl-2 pr-1" href="#">
						Sith
					</a>
					<a className="dropdown-item pl-2 pr-1" href="#">
						Something else here
					</a>
				</div>
			</div>
		</nav>
	);
};
