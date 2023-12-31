import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Login } from "./pages/login";
import { Private } from "./pages/private";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { ContactUs } from "./component/contactUs";
import { MovieProfile } from "./component/movieProfile";
import { AboutUs } from "./pages/aboutUs";
import { AllMovies } from "./pages/allMovies";
import { Movie } from "./pages/movie";
import { UserPage } from "./component/userPage";
import { EditUser } from "./component/editUser";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Private />} path="/private" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<ContactUs />} path="/contactUs" />
                        <Route element={<MovieProfile />} path="/movieProfile" />
                        <Route element={<AboutUs />} path="/aboutUs" />
                        <Route element={<AllMovies />} path="/allMovies" />
                        <Route
							path="/allMovies/:movieId"
							element={<Movie />}
						/>
                         <Route element={<UserPage />} path="/userPage" />
                         <Route element={<EditUser />} path="/editUser" />

                    </Routes>
                    
                    <Footer />
                    
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
