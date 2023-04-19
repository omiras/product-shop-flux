const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			products: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			addProduct: (title, price) => {

				// 1. Obtener todos los almacenes
				const store = getStore();

				// 2. Actualizar el almacén de información que nos interese.
				// En este caso, actualizo el almacém 'products'. LE añado un nuevo objeto que representa el producto
				const newProducts = [...store.products, {title, price}];

				// Actualizar el almacén de nombre 'products' con todos los productos ubicados en la variable 'newProducts'
				setStore({products: newProducts})
			},
		}
	};
};

export default getState;
