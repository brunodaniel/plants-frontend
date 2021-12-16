import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Plant from "./pages/Plant/Plant";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

axios.defaults.baseURL = "https://plants-api-1.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plant" element={<Plant />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
