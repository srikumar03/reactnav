import { useState } from "react";
import NavBar from "./components/navBar";
import "./App.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
import Allcompanies from "./pages/All-Companies";
import EmployersProfile from "./pages/EmployersProfile";
import PlansBilling from "./pages/Plans&Billing";
import PostaJob from "./pages/PostaJob";
import SavedCandidate from "./pages/SavedCandidate";
import Settings from "./pages/Settings";

function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <Router>
        <header>
          <GiHamburgerMenu onClick={() => setShowNav(!showNav)} /> Header
          Content
        </header>
        <NavBar show={showNav} />

        <div className="main">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/AllCompanies" element={<Allcompanies />} />
            <Route path="/EmployersProfile" element={<EmployersProfile />} />
            <Route path="/PlansBilling" element={<PlansBilling />} />
            <Route path="/PostaJob" element={<PostaJob />} />
            <Route path="/SavedCandidate" element={<SavedCandidate />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
