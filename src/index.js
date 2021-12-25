import { ColorModeScript } from "@chakra-ui/react";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Ef from "./pages/executive_functions_coaching";
import Our_team from "./pages/our_team";
import SettingUp from "./pages/setting_up_coaching";
import Somatic from "./pages/somatic";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />

    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/executive_functions_coaching/" element={<Ef />} />
        <Route path="/our_team/" element={<Our_team />} />
        <Route path="/setting_up_coaching" element={<SettingUp />} />
        <Route path="/somatic" element={<Somatic />} />
      </Routes>
    </Router>
  </StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
