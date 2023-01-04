import React from "react";
import "./home.css";
import "./common.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Helmet>
        <script src="js/home.js"></script>
        <script src="js/playmap.js"></script>

        <script
          async
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAJcCCy7Q3NXrf-PQlMAmBSfq2XPU3OaCs&libraries=geometry&callback=initMap"
        ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
      </Helmet>

      <div className="menu-wrapper backdrop-blur">
        <div className="menu container">
          <div className="logo">
            <a href="#" className="logo-link">
              <img src={require("../assets/woooba.png")} alt="logo" />
            </a>
          </div>
          <div className="links">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/about" className="link">
              About
            </Link>
            <Link to='/footer' className="link">
              Contact US
            </Link>
            <Link to='/contact' className="link">
              Team
            </Link>
            <Link to="/login" className="link btn orange">
              Reserve Gamename
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-wrapper">
        <div id="playmap"></div>
        <div id="hero" className="backdrop-blur"></div>

        <div className="hero-text container">
          <div id="heroText" className="intro-left">
            <h3 className="clr-primary font-bebas">
              World One-On-One Ballers Association
            </h3>
            <h1 className="clr-black">
              Helping you find
              <span className="clr-primary">places</span> to Play.
              <br />
              Live a life of Social Sports
            </h1>
            <div className="forward">
              <a href="https://woooba.io" className="link btn orange">
                Start for Free
              </a>

              <a className="play-btn" href="https://youtube.com/">
                <p className="clr-primary">Watch Introduction Video</p>
              </a>
            </div>
          </div>
        </div>
        <div id="observerLevelOne" className="a-place one"></div>

        <div className="play-viewer" id="playViewer">
          <div className="play-scroll no-scrollbar" id="gameViewer">
            <div className="game-scroller" id="gameContent">
              {/* <!-- Games Load Here --> */}
            </div>
          </div>
        </div>

        <div className="play-viewer-wrapper">
          <div className="circle-anim-container">
            <div className="circle-overlay" id="circleCut">
              <div className="orange-circle"></div>
            </div>
          </div>
          <div id="playViewerLarge" className="play-viewer-large">
            <div className="play-scroll-large no-scrollbar">
              <div className="game-scroller" id="gameContentLarge">
                {/* <!-- Games Load Here --> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tester-pad"></div>



 
    </div>
  );
}

export default Home;
