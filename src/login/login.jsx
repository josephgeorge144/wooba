import React from "react";
import "./login.css";

function Login() {
  return (
    <div>
      <div className="newRootRootRootRoot">
        <div className="blackBack">
          <img
            className="icon"
            src={`https://file.rendit.io/n/TqLFZpwrDWrUxptWw2td.svg`}
          />

          <div className="blur1">
            <div className="newGroup">
              <div className="title">Want to have it in your pocket?</div>
              <div className="group2">
                <div className="title1">
                  Reserve your gamename now and we’ll notify you as soon as the
                  app is available for downloading
                </div>
                <div className="ellipse">
                  <div className="text4">i</div>
                </div>
              </div>
            </div>

            <div className="form1">
              <input className="text5 whiteFlexColumn" placeholder="Email" />
              <input className="text5 whiteFlexColumn" placeholder="Gamename" />

              <div className="title5">
                By clicking “RESERVE”, you acknowledge that you have read and
                understood, and agree to,WOOBA's Terms & Conditions and Privacy
                Policy.
              </div>

              <button className="submit">Reserve</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
