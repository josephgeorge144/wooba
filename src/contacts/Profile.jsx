import React from "react";
import { useCallback } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./contact.css";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { useState } from "react";
import { useEffect } from "react";
import 'animate.css';

export function Profile(props) {
  const onArrowLeftIconClick = () => {
    
    props.onArrowLeftIconClick();
   
  };

  const onArrowRightIconClick = () => {
    props.onArrowRightIconClick(); 

   
    
  };

  
  return (
    <div >
      {/* class={`${props.swipe.out}`}  */}
      <div class={`team-member animate__animated animate__pulse ${props.swipe.in}`} onAnimationEnd={() => {props.setSwipeRight()}}>
        <div class="content">
          {/* <h3>Evgen Slyuzkin</h3> */}
          <h3>{props.name}</h3>
          <div className="key-items">
            <div className="parent">
              <div className="div">{props.owned}</div>
              <div className="years-bballer">
                <p className="years">Companies</p>
                <p className="bballer">Owned</p>
              </div>
            </div>

            <div className="parent">
              <div className="div">{props.balleryears}</div>
              <div className="years-bballer">
                <p className="years">Years</p>
                <p className="bballer">Bballer</p>
              </div>
            </div>
            <div className="parent">
              <div className="div">{props.experience}</div>
              <div className="years-bballer">
                <p className="years">Years</p>
                <p className="bballer">Experience</p>
              </div>
            </div>
            <div className="parent">
              <div className="div">{props.designexperience}</div>
              <div className="years-bballer">
                <p className="years">Years</p>
                <p className="bballer">in Design</p>
              </div>
            </div>
            <div className="image">
              <img
                className="profileimg"
                alt=""
                // src='../danprofile.png'
                src={`../${props.src}`}
              />
            </div>
          </div>
        </div>

        <img
          className="arrow-left-icon"
          alt=""
          src="../arrow-left.svg"
          onClick={onArrowLeftIconClick}
          
        />
        <img
          className="arrow-right-icon"
          alt=""
          src="../arrow-right.svg"
          onClick={onArrowRightIconClick}
        />
      </div>
    </div>
  );
}

export function Slider() {
  const [index, setindex] = useState(0);
  const [swipeRight, setSwipe] = useState('')
  const [swipeLeft, setSwipeLeft] = useState('')
  
  const setSwipeRight=()=>setSwipe('')

  
  // useEffect(() => {
    
  
  //   return () => {
  //     setSwipe('');
  //   }
  // }, )

  const profiledata = [
    {
      name: "Evgen Slyuzkin",
      balleryears: "20",
      experience: "9",
      designexperience: "9",
      owned: "9",
      src:'061fc5d81a8f4697be54156089832e25-1@2x.png'
    },
    {
      name: "Dan",
      balleryears: "37",
      experience: "25",
      designexperience: "9",
      owned: "4",
      src:'../danprofile.png'
    },
    {
      name: "Natalia",
      balleryears: "37",
      experience: "9",
      designexperience: "10",
      owned: "1",
      src:'Natalia.png'
    },
    {
      name: "Daniel",
      balleryears: "24",
      experience: "49",
      designexperience: "3",
      owned: "9",
      src:'../danprofile.png'
    },
  ];

 

  const profilearray = profiledata.map((item, index) => {
   
    return (
      <Profile
        onArrowRightIconClick={() =>{
         setindex(() => index >= profiledata.length - 1 ? 0 : index + 1);
         swipeRight ? setSwipe(''): setSwipe(()=>({out:'animate__fadeOutRight',in:'animate__fadeInLeft' }));
         
    }
        
      }


        
        
        onArrowLeftIconClick={() =>
          setindex(() => (index <= 0 ? profiledata.length - 1 : index - 1))
        }
        experience={item.experience}
        designexperience={item.designexperience}
        owned={item.owned}
        name={item.name}
        balleryears={item.balleryears}
        src={item.src}
        swipe={swipeRight}
        setSwipeRight={setSwipeRight}
        
      />
    );
  });
  console.log(index);
  return <>{profilearray[index]}</>;
}
