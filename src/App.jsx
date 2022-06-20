import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React from "react";

import Navbar from "./components/Navbar/Navbar";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Location from "./Pages/Location";
import Episodes from "./Pages/Episodes";
import CardInfo from './components/Card/CardInfo';

import "./App.css";
import { Home } from './Pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<CardInfo />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/card/episodes/:id" element={<CardInfo />} />

        <Route path="/location" element={<Location />} />
        <Route path="/card/location/:id" element={<CardInfo />} />

        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
