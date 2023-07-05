import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { CardPoster } from "./cardPoster";
import "../../styles/carousel.css";

export const PosterCarousel = (props) =>{
  console.log(props.view)
  const view = props.view
  const { store, actions } = useContext(Context);
  const movies = store[view]
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numVisibleCards, setNumVisibleCards] = useState(5);

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => {
      window.removeEventListener('resize', updateVisibleCards);
    };
  }, []);

  const updateVisibleCards = () => {
    const { innerWidth } = window;
    let numCards = 5;

    if (innerWidth < 1200) {
      numCards = 4;
    }
    if (innerWidth < 992) {
      numCards = 3;
    }

    if (innerWidth < 768) {
      numCards = 2;
    }
    if (innerWidth < 576) {
      numCards = 1;
    }


    setNumVisibleCards(numCards);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - numVisibleCards + movies.length) % movies.length;
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + numVisibleCards) % movies.length;
      return newIndex;
    });
  };

  return (
    <div id="carouselPoster" className="carousel slide carouselPoster" data-bs-ride={false}>
      <div className={`carousel-inner visible-${numVisibleCards} carousel-content `}>
        {movies.map((movie, index)=>{
          const isActive =
            (index >= currentIndex && index < currentIndex + numVisibleCards) ||
            (currentIndex + numVisibleCards > movies.length &&
            index < (currentIndex + numVisibleCards) % movies.length);

          const cardStyle = {
            display: isActive ? 'block' : 'none',
          };

            return (
              <div className={`carousel-item ${isActive ? 'active' : ''} carousel-card`} key={index} style={cardStyle}>
                <CardPoster movie={movie} index={index} key={index}/>
                  {/* <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="d-block w-100" alt="..."/>
                  <div className="carouselBody ">
                    <h5 className="">{movie.title} </h5>
                    <div className="">
                      <a href="#" className="btn btn-primary">Trailer</a>
                    </div>
                  </div> */}
              </div>
            );
        })}
      </div>
            <button className="carousel-control-prev carouselButtonPrevious" type="button" data-bs-target="#carouselPoster" data-bs-slide="prev" onClick={handlePrev}>
              <div className="carouselButton">
                <span className="carousel-control-prev-icon" style={{color: "blue"}} aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </div>
            </button>
            <button className="carousel-control-next carouselButtonNext" type="button" data-bs-target="#carouselPoster" data-bs-slide="next" onClick={handleNext}>
              <div className="carouselButton">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </div>
            </button>
        
    </div>
        );
};

        










/*---------------------------------------------------------------------------------------*/

// const { store, actions } = useContext(Context);
//     console.log(store.upcoming.length);
//     const movie = store.topRated
//     return(
//         <div className="d-flex flex-row flex-nowrap overflow-auto container-fluid ">
//             {movie.map((movie, index)=>{
//                 return <CardPoster movie={movie} index={index} key={index}/>
//             })}

                
//         </div>
//     )