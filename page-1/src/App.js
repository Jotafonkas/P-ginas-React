import React from "react";
import Home from "./components/home";
import Services from "./components/services";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/servicios" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;