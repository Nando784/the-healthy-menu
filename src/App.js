import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Dietary from "./pages/Dietary";
import Intolerance from "./pages/Intolerance";
import Country from "./pages/Country";
import History from "./pages/History";
import Recipe from "./pages/Recipe";
import Searched from "./pages/Searched"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/staging" element={<Recipe />} />
          <Route exact path="/dietary" element={<Dietary />} />
          <Route exact path="/intolerance" element={<Intolerance />} />
          <Route exact path="/country" element={<Country />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/recipe/:name/:id" element={<Recipe />} />
          <Route
            exact
            path="/searched/:filterType/:filterName/:query"
            element={<Searched />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
