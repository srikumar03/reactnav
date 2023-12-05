import { Link } from "react-router-dom";

function NavBar({ show }) {
  return (
    <div className={show ? "sideNav active" : "sideNav"}>
      <ul>
        <li>
          <Link to="/">Overview</Link>
        </li>
        <li>
          <Link to="/EmployersProfile">Employers Profile</Link>
        </li>
        <li>
          <Link to="/PostaJob">Post a Job</Link>
        </li>
        <li>
          <Link to="/SavedCandidate">Saved Candidate</Link>
        </li>
        <li>
          <Link to="/PlansBilling">Plans & Billing</Link>
        </li>
        <li>
          <Link to="/AllCompanies">All Companies</Link>
        </li>
        <li>
          <Link to="/Settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
