const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [],
			people: [],
			films: []
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
			}
		}
	};
};
export default getState;
