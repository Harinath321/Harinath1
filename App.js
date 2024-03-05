import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from "./Components/Home";
import Qualification from "./Components/Qualification";
import CareerObjective from "./Components/CareerObjective";
import Skills from "./Components/Skills";
import Projects from "./Components/projects";
import ExtraActivity from "./Components/ExtraCircular";
import Certificates from "./Components/Certification";
import Awards from "./Components/AwardsAndAchievements";
const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            RESUME
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/CareerObjective">
                  Career Objective
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Qualification">
                  Qualification
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Skills">
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Certification">
                  Certificates
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ExtraCircular">
                  Extra Circular Activities
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AwardsAndAchievements">
                  Awards and Achievements
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/CareerObjective" element={<CareerObjective />} />
          <Route path="/Qualification" element={<Qualification />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/ExtraCircular" element={<ExtraActivity />} />
          <Route path="/Certification" element={<Certificates />} />
          <Route path="/AwardsAndAchievements" element={<Awards />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
