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
			auth: false,
			token: null,
			userName: null,
			userLastName: null,
			userBirthday: null,
			email: null,
			nickname: null,
			userId: null,
			Horror: [],
			Action: [],
			Comedy: [],
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
				const headers = {
					"Content-Type": "application/json",
				}
				if (localStorage.getItem("token")) {
					headers["Authorization"] = 'Bearer ' + localStorage.getItem("token")
				}
				const options = {
					method: 'GET',
					headers,
				};
				try {
					const resp = await fetch(`${process.env.BACKEND_URL}/api/reviews/${movieId}`, options)
					const data = await resp.json()
					console.log(data)
					setStore({ reviews: data.results ?? [] }) //see with marcos when the token is expired how to prevent error
				} catch (error) {
					console.log("Error", error)
				}
			},
			isAuthenticated: (token) => {
				console.log(token);


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
						console.log(response)
						setStore({ storeToken: true });
					})
					.catch(error => console.log('error', error));
			},
			login: (email, password) => {
				return new Promise((resolve, reject) => {
					fetch(process.env.BACKEND_URL + "/api/login", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({ email, password }),
					})
						.then((response) => response.json())
						.then((data) => {
							console.log(data);
							if (data.token) {
								localStorage.setItem("token", data.token);
								localStorage.setItem("userName", data.user.name);
								localStorage.setItem("email", data.user.email);
								localStorage.setItem("nickname", data.user.nickname)
								localStorage.setItem("userId", data.user.id)
								localStorage.setItem("userLastName", data.user.last_name)
								localStorage.setItem("userBirthday", data.user.birthday)

								setStore({ userName: data.user.name });
								setStore({ email: data.user.email });
								setStore({ token: data.token });
								setStore({ auth: true });
								setStore({ nickname: data.user.nickname });
								setStore({ userId: data.user.id });
								setStore({ userLastName: data.user.last_name });
								setStore({ userBirthday: data.user.birthday });
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
			},
			editUser:(user)=>{
				console.log(user)
				const config = {
					method: 'PUT',
					body: JSON.stringify(user),
					headers: {
					  "content-Type": "application/json",
					  "Authorization":"Bearer " + localStorage.getItem("token")
				
					}
				  }

				fetch(process.env.BACKEND_URL + "/api/editUser",config)
				.then((response) => response.json())
				.then((response) => {
				  
				  console.log(response)
				})
			},
			updateToken: () => {
				if (localStorage.getItem("token")) {
					setStore({ token: localStorage.getItem("token") })
					setStore({ userName: localStorage.getItem("userName") })
					setStore({ email: localStorage.getItem("email") })
					setStore({ nickname: localStorage.getItem("nickname") })
					setStore({ userId: localStorage.getItem("userId") })
					setStore({ userLastName: localStorage.getItem("userLastName") })
					setStore({ userBirthday: localStorage.getItem("userBirthday") })
				}
			},
			createReview: async (score, title, text, movieId) => {
				let store = getStore()
				const options = {
					method: 'POST',
					headers: {
						"Content-Type": "application/json",
						"Authorization": 'Bearer ' + localStorage.getItem("token")
					},
					body: JSON.stringify({
						"score": score,
						"title": title,
						"text": text,
						"movie_id": movieId,


					})
				};
				try {
					const resp = await fetch(`${process.env.BACKEND_URL}/api/review`, options)
					const data = await resp.json()
					console.log(data)
					return data
					//setStore({ reviews: data.results })
				} catch (error) {
					console.log("Error", error)
				}
			},
			getHorrorMovies: async () =>{
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/allMovies/Horror`);
					const data = await response.json();
					//console.log(data)
					setStore({Horror: data})
				  } catch (error) {
					console.error(error);
				  }
			},
			getActionMovies: async () =>{
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/allMovies/Action`);
					const data = await response.json();
					//console.log(data)
					setStore({Action: data})
				  } catch (error) {
					console.error(error);
				  }
			},
			getComedyMovies: async () =>{
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/allMovies/Comedy`);
					const data = await response.json();
					//console.log(data)
					setStore({Comedy: data})
				  } catch (error) {
					console.error(error);
				  }
			}

		}
	}
};



export default getState;
