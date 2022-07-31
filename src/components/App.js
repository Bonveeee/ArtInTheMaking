import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Artists from "./Artists";
import ArtWorks from "./ArtsWorks";
import Helpdesk from "./Helpdesk";
import Home from "./Home";
import About from "./About";

//this is main  parent component

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/ArtWorks" element={<ArtWorks />}></Route>
        <Route exact path="/Artists" element={<Artists />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/Helpdesk" element={<Helpdesk />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
