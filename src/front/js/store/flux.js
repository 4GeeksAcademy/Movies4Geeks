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
				{
					adult: false,
					backdrop_path: "/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg",
					genre_ids: [
						28,
						12,
						16,
						878
					],
					id: 569094,
					original_language: "en",
					original_title: "Spider-Man: Across the Spider-Verse",
					overview: "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
					popularity: 2471.835,
					poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
					release_date: "2023-05-31",
					title: "Spider-Man: Across the Spider-Verse",
					video: false,
					vote_average: 8.8,
					vote_count: 1285
				},
				{
					adult: false,
					backdrop_path: "/8FhKnPpql374qyyHAkZDld93IUw.jpg",
					genre_ids: [
						9648,
						53,
						878
					],
					id: 536437,
					original_language: "en",
					original_title: "Hypnotic",
					overview: "A detective becomes entangled in a mystery involving his missing daughter and a secret government program while investigating a string of reality-bending crimes.",
					popularity: 2137.534,
					poster_path: "/3IhGkkalwXguTlceGSl8XUJZOVI.jpg",
					release_date: "2023-05-11",
					title: "Hypnotic",
					video: false,
					vote_average: 6.6,
					vote_count: 166
				},
				{
					adult: false,
					backdrop_path: "/9NgtktUFLm9cnFDFaekx2ROh84f.jpg",
					genre_ids: [
						28,
						12,
						878
					],
					id: 667538,
					original_language: "en",
					original_title: "Transformers: Rise of the Beasts",
					overview: "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
					popularity: 1751.386,
					poster_path: "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
					release_date: "2023-06-06",
					title: "Transformers: Rise of the Beasts",
					video: false,
					vote_average: 7.4,
					vote_count: 260
				},
				{
					adult: false,
					backdrop_path: "/9t0tJXcOdWwwxmGTk112HGDaT0Q.jpg",
					genre_ids: [
						27,
						53
					],
					id: 890771,
					original_language: "en",
					original_title: "The Black Demon",
					overview: "Oilman Paul Sturges' idyllic family vacation turns into a nightmare when they encounter a ferocious megalodon shark that will stop at nothing to protect its territory. Stranded and under constant attack, Paul and his family must somehow find a way to get his family back to shore alive before it strikes again in this epic battle between humans and nature.",
					popularity: 1187.323,
					poster_path: "/uiFcFIjig0YwyNmhoxkxtAAVIL2.jpg",
					release_date: "2023-04-26",
					title: "The Black Demon",
					video: false,
					vote_average: 6.5,
					vote_count: 162
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
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
			getUpcoming: async() => {
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGYxMDkyNDZkNzUxYmJhYjNmMTQzMGNlYzNmYmU0NCIsInN1YiI6IjY0ODgxODY1ZDJiMjA5MDBjYTIxMTg2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RiM24dMvTMZi652gXFQnpguE7dT8yYex5ZsTaY3OjJw");

				var requestOptions = {
				method: 'GET',
				headers: myHeaders,
				redirect: 'follow'
				};

				const resp = await fetch("https://api.themoviedb.org/3/movie/upcoming", requestOptions)
				const data = await resp.json()
				console.log(data.results)
				setStore({ upcoming: data.results })
				
			},
			getTopRated: async() => {
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGYxMDkyNDZkNzUxYmJhYjNmMTQzMGNlYzNmYmU0NCIsInN1YiI6IjY0ODgxODY1ZDJiMjA5MDBjYTIxMTg2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RiM24dMvTMZi652gXFQnpguE7dT8yYex5ZsTaY3OjJw");

				var requestOptions = {
				method: 'GET',
				headers: myHeaders,
				redirect: 'follow'
				};

				const resp = await fetch("https://api.themoviedb.org/3/movie/top_rated", requestOptions)
				const data = await resp.json()
				console.log(data.results.length)
				//setStore({ upcoming: data.results })
				
			},
		

			
			
		}
	};
};

export default getState;
