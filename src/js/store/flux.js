const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [],
			people: [],
			films: [],
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
			saveFavorites: name => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
				console.log(store.favorites);
			}
		}
	};
};
export default getState;
