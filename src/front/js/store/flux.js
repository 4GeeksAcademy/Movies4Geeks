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
				{
					adult: false,
					backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
					genre_ids: [
						18,
						80
					],
					id: 238,
					original_language: "en",
					original_title: "The Godfather",
					overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
					popularity: 117.353,
					poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
					release_date: "1972-03-14",
					title: "The Godfather",
					video: false,
					vote_average: 8.7,
					vote_count: 18106
				},
				{
					adult: false,
					backdrop_path: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
					genre_ids: [
						18,
						80
					],
					id: 278,
					original_language: "en",
					original_title: "The Shawshank Redemption",
					overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
					popularity: 89.119,
					poster_path: "/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
					release_date: "1994-09-23",
					title: "The Shawshank Redemption",
					video: false,
					vote_average: 8.7,
					vote_count: 23976
				},
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
					popularity: 2068.003,
					poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
					release_date: "2023-05-31",
					title: "Spider-Man: Across the Spider-Verse",
					video: false,
					vote_average: 8.7,
					vote_count: 1525
				},
				{
					adult: false,
					backdrop_path: "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
					genre_ids: [
						18,
						80
					],
					id: 240,
					original_language: "en",
					original_title: "The Godfather Part II",
					overview: "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
					popularity: 65.573,
					poster_path: "/bMadFzhjy9T7R8J48QGq1ngWNAK.jpg",
					release_date: "1974-12-20",
					title: "The Godfather Part II",
					video: false,
					vote_average: 8.6,
					vote_count: 10930
				},
				{
					adult: false,
					backdrop_path: "/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
					genre_ids: [
						18,
						36,
						10752
					],
					id: 424,
					original_language: "en",
					original_title: "Schindler's List",
					overview: "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
					popularity: 56.704,
					poster_path: "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
					release_date: "1993-12-15",
					title: "Schindler's List",
					video: false,
					vote_average: 8.6,
					vote_count: 14183
				},
				{
					adult: false,
					backdrop_path: "/vI3aUGTuRRdM7J78KIdW98LdxE5.jpg",
					genre_ids: [
						35,
						18,
						10749
					],
					id: 19404,
					original_language: "hi",
					original_title: "दिलवाले दुल्हनिया ले जायेंगे",
					overview: "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
					popularity: 28.255,
					poster_path: "/ktejodbcdCPXbMMdnpI9BUxW6O8.jpg",
					release_date: "1995-10-19",
					title: "Dilwale Dulhania Le Jayenge",
					video: false,
					vote_average: 8.6,
					vote_count: 4150
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

				const resp = await fetch(process.env.BACKEND_URL + "/api/upcoming", requestOptions)
				const data = await resp.json()
				console.log(data)
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

				const resp = await fetch(process.env.BACKEND_URL + "/api/top_rated", requestOptions)
				const data = await resp.json()
				console.log(data)
				setStore({ topRated: data.results })
				
			}
		}
	};
};

export default getState;
