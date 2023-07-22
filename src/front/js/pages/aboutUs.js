import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/abautUs.css";
import foto1 from "../../img/foto-de-ruben.png";
import foto2 from "../../img/la-foto-javier.png";
import foto3 from "../../img/johana-foto.png";




export const AboutUs = () => {
  return (
  <div className="container">
    <h1 className="about-us-heading">About Us... </h1>
    <div className="container-row">
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={foto1} alt="foto1" style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="flip-card-back">
          <div className="back-header">
            <img src={foto1} alt="foto1" style={{ width: "50%", marginTop: "10%" }} />
          </div>
          <div className="back-footer">
            <h3>Ruben Garcia Gutierrez</h3>
            <p>
              I am Ruben, I am 35 years old from Barcelona Spain.I dedicated my entire professional life to the world of sales. 
              However, a seemingly unimportant conversation ended up broadening my horizons to a field that would captivate me and make me strive to learn a little more every day.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={foto2} alt="foto2" style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="flip-card-back">
          <div className="back-header">
            <img src={foto2} alt="foto2" style={{ width: "50%", marginTop: "10%" }} />
          </div>
          <div className="back-footer" style={{ textAlign: "center" }}>
            <h3>Javier Pestana</h3>
            <p>
              I am Javier, I am 38 years old, and I currently work as an accountant.
              I reside in Portugal and I have ventured into this adventure, believing that I could become a great professional in the sector.
              I would like to acquire more knowledge and immerse myself in this world.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={foto3} alt="foto3" style={{ width: "100%", height: "105%" }} />
        </div>
        <div className="flip-card-back">
          <div className="back-header">
            <img src={foto3} alt="foto3" style={{ width: "50%", marginTop: "10%" }} />
          </div>
          <div className="back-footer" style={{ textAlign: "center" }}>
            <h3>Johana Semeniuk</h3>
            <p>I'm Johana, I'm 29 years old, and I've been living in Barcelona Spain since I was a teenager. 
              Currently, I'm attending this bootcamp, which is a completely unknown world to me. However, I can say that I find it very interesting. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
    
  );
};