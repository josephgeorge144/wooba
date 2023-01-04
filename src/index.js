import { StrictMode } from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

WebFont.load({
  google: {
    families: ["Poppins", "Montserrat:700", "Bebas Neue:400"],
  },
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
   
  </StrictMode>,
  rootElement
);
