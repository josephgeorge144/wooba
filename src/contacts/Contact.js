
import "bootstrap/dist/css/bootstrap.min.css";

import "./contact.css";
import { Profile, Slider } from "./Profile";
import 'animate.css';




const Contact = () => {
 

  
  return (
    <div className="contact">
      {/* to display the map */}
      <img className="map-icon" alt="" src="../map.svg" />
      {/* team member profile */}
       <Slider/>
      
      <img className="courts-icon" alt="" src="../courts.svg" />
      <div className="titlec">
        <div className="title1 animate__animated animate__backInRight">Our international squad</div>
      </div>


      
    </div>
  );
};

export default Contact;
