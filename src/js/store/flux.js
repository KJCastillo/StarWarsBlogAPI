const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [],
			people: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				const store = getStore();
				fetch("https://swapi.co/api/people/")
					.then(response => response.json())
					.then(data => {
						setStore({ people: data.results });
					});
				console.log(store.demo);
			}
		}
	};
};
export default getState;
