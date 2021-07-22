import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import {LoginContextProvider} from './context/Login/LoginContext';

ReactDOM.render(
  <LoginContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </React.StrictMode>
  </LoginContextProvider>,
  document.getElementById("root")
);
