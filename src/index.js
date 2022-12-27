import { StrictMode } from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import App from "./App";

WebFont.load({
  google: {
    families: ["Poppins", "Montserrat:700", "Bebas Neue:400"],
  },
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
