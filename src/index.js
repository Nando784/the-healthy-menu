import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Dietary from "./pages/Dietary";
import Intolerance from "./pages/Intolerance";
import Country from "./pages/Country";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/course" element={<Course />} />
        <Route exact path="/dietary" element={<Dietary />} />
        <Route exact path="/intolerance" element={<Intolerance />} />
        <Route exact path="/country" element={<Country />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
