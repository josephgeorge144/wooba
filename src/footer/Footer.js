import { useNavigate } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const navigate=useNavigate();
  return (
    <div className="footerf" >
      <div className="footer1f">
        <img className="logo-icon3f" alt="" src="../logo3@2x.png" />
        <div className="container5f">
          <div className="text-parent4f">
            <div className="reserve1f">Company</div>
            <div className="links4f">
              <div >Testimonials</div>
              <div >About</div>
              <div >Hoops</div>
              <div >Soccer</div>
              <div >Team</div>
            </div>
          </div>
          <div className="text-parent4f">
            <div className="reserve1f">Help</div>
            <div className="links4f">
              <div >{`Terms & conditions`}</div>
              <div>Privacy policy</div>
              <div >Cookies</div>
              <div >Payment methods</div>
              <div >{`Shipping & returns`}</div>
            </div>
          </div>
          <div className="column5f">
            <div >
              <div className="reserve1f">Contact</div>
              <div className="links6f">
                <div className="contactf">hello@woooba.io</div>
                <div className="div67f">+30 210 3231 483</div>
              </div>
            </div>
            <div className="socials1f">
              <div className="reserve1f">Follow us</div>
              <div className="links7f">
                <img className="fb-icon1f" alt="" src="../fb1.svg" />
                <img className="fb-icon1f" alt="" src="../tw1.svg" />
                <img className="fb-icon1f" alt="" src="../in1.svg" />
              </div>
            </div>
          </div>
          <div className="cta1f">
            <div className="text23f">
              <div className="title40f">
                You can support the building of WOOOBA now and become a
                PremiumPlayer by subscribing or buying a bundle
              </div>
            </div>
            
              <button className="button8f" onClick={()=>navigate('/login')}>RESERVE GAMENAME</button>
           
          </div>
        </div>
        <div className="all-rights-reserved-2021-woo1f">
          All rights reserved 2021 © WOOOBA
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
