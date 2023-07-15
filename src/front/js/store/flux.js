const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
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
			upcoming: [

			],
			topRated: [

			],
			reviews: [

			],
			allMovies: [

			],
			movie: [

			],
			trailer: [

			],
			genresById: [

			],
			isAuthenticated: false,
			user: null,
			auth: false
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
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
			getUpcoming: async () => {
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGYxMDkyNDZkNzUxYmJhYjNmMTQzMGNlYzNmYmU0NCIsInN1YiI6IjY0ODgxODY1ZDJiMjA5MDBjYTIxMTg2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RiM24dMvTMZi652gXFQnpguE7dT8yYex5ZsTaY3OjJw");

				var requestOptions = {
					method: 'GET',
					headers: myHeaders,
					redirect: 'follow'
				};

				const resp = await fetch(process.env.BACKEND_URL + "/api/upcoming", requestOptions)
				const data = await resp.json()
				//console.log(data)
				setStore({ upcoming: data.results })


			},
			getTopRated: async () => {
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGYxMDkyNDZkNzUxYmJhYjNmMTQzMGNlYzNmYmU0NCIsInN1YiI6IjY0ODgxODY1ZDJiMjA5MDBjYTIxMTg2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RiM24dMvTMZi652gXFQnpguE7dT8yYex5ZsTaY3OjJw");

				var requestOptions = {
					method: 'GET',
					headers: myHeaders,
					redirect: 'follow'
				};

				const resp = await fetch(process.env.BACKEND_URL + "/api/top_rated", requestOptions)
				const data = await resp.json()
				//console.log(data)
				setStore({ topRated: data.results })

			},
			getAllMovies: async () => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/all_movies")
					const data = await resp.json()
					setStore({ allMovies: data.results })
					//console.log(data.results)
					//return data.results;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			getMovie: async (movieId) => {
				try {
					const resp = await fetch(`${process.env.BACKEND_URL}/api/all_movies/${movieId}`)
					const data = await resp.json()
					setStore({ movie: data.results })
				} catch (error) {
					console.log("Error", error)
				}
			},
			getTrailer: async (movieId) => {
				console.log(movieId)
				try {
					const resp = await fetch(`${process.env.BACKEND_URL}/api/all_movies/trailer/${movieId}`)
					const data = await resp.json()
					setStore({ trailer: data.results })
				} catch (error) {
					console.log("Error", error)
				}
			},
			getGenresById: async (movieId) => {
				try {
					const resp = await fetch(`${process.env.BACKEND_URL}/api/all_movies/genres/${movieId}`)
					const data = await resp.json()
					setStore({ genresById: data.results })
				} catch (error) {
					console.log("Error", error)
				}
			},
			getReviewsById: async (movieId) => {
				//console.log(movieId)
				try {
					const resp = await fetch(`${process.env.BACKEND_URL}/api/reviews/${movieId}`)
					const data = await resp.json()
					//console.log(data)
					setStore({ reviews: data.results })
				} catch (error) {
					console.log("Error", error)
				}
			},
			isAuthenticated: (token) => {
				console.log(token);
				localStorage.setItem('token', token);

				const options = {
					method: 'POST',
					headers: {
						"Content-Type": "application/json",
						"Authorization": 'Bearer ' + token
					},
					body: JSON.stringify({})
				};

				fetch(process.env.BACKEND_URL + "/api/private", options)
					.then(response => {
						if (response.status === 200) {
							return response.json();
						} else {
							throw new Error("There was a problem in the login request");
						}
					})
					.then(response => {
						setStore({ storeToken: true, token: token });
					})
					.catch(error => console.log('error', error));
			},
			login: (email, password) => {
				return new Promise((resolve, reject) => {
					fetch(process.env.BACKEND_URL + "api/login", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({ email, password }),
					})
						.then((response) => response.json())
						.then((data) => {
							if (data.token) {
								localStorage.setItem("token", data.token);
								setStore({ user: data.user });
								setStore({ auth: true });
								resolve(true);
							} else {
								console.log("Password or mail incorrect");
								resolve(false);
							}
						})
						.catch((error) => {
							console.error(error);
							reject(error);
						});
				});
			},
			signOut: () => {
				localStorage.removeItem("token");
				setStore({ auth: false })
			}

		}
	}
};


export default getState;
