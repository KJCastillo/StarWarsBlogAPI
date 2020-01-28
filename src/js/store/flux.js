const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [],
			people: [],
			films: [],
			planets: [],
			favorites: []
		},
		actions: {
			loadSomePeople: () => {
				const store = getStore();
				fetch("https://swapi.co/api/people/")
					.then(response => response.json())
					.then(data => {
						setStore({ people: data.results });
					});
			},
			loadSomeFilms: () => {
				const store = getStore();
				fetch("https://swapi.co/api/films/")
					.then(response => response.json())
					.then(data => {
						setStore({ films: data.results });
					});
			},
			loadSomePlanets: () => {
				const store = getStore();
				fetch("https://swapi.co/api/planets/")
					.then(response => response.json())
					.then(data => {
						setStore({ planets: data.results });
					});
			},
			saveFavorites: name => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
			},
			saveFilms: title => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, title] });
			},
			savePlanets: planet => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, planet] });
			},
			deleteFav: i => {
				const store = getStore();
				const favorites = store.favorites.filter((el, index) => {
					return i !== index;
				});
				setStore({ favorites: [...favorites] });
			}
		}
	};
};
export default getState;
