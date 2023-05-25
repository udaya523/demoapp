import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import "./Table5.css";
import Range1 from "./Range1";
import Range2 from "./Range2";
import Range3 from "./Range3";
import Range4 from "./Range4";
import Range5 from "./Range5";
import Range6 from "./Range6";

const Table5 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const history = useHistory();
  const[display,setDisplay] = useState(true);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleBack = () => {
    history.goBack();
    setDisplay(true);
  };

  return (
    <>
      <br />
      <Router>
        <nav className="header-container">
          
            <div className="header-content">
              <div className="back-container">
                <button className="btn btn-secondary" onClick={handleBack}>
                  Back
                </button>
              </div>
              <div className="dropdown-container">
                <div className="dropdown">
                  <button
                    className="nav-link btn btn-link dropdown-toggle"
                    id="navbarDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={isDropdownOpen}
                    onClick={toggleDropdown}
                  >
                    Dropdown
                  </button>
                  {isDropdownOpen && (
                    <div className="dropdown-menu dropdown-menu-right show">
                      <Link to="/range1">
                        <button onClick={() => setDisplay(false)} className="dropdown-item">Constituency won with margin Range 1-100</button>
                      </Link>
                      <Link to="/range2">
                        <button onClick={() => setDisplay(false)} className="dropdown-item">100-1000</button>
                      </Link>
                      <Link to="/range3">
                        <button onClick={() => setDisplay(false)}  className="dropdown-item">1000-10000</button>
                      </Link>
                      <Link to="/range4">
                        <button onClick={() => setDisplay(false)}  className="dropdown-item">10000-50000</button>
                      </Link>
                      <Link to="/range5">
                        <button onClick={() => setDisplay(false)} className="dropdown-item">50000-100000</button>
                      </Link>
                      <Link to="/range6">
                        <button onClick={() => setDisplay(false)} className="dropdown-item">100000 and above</button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          
        </nav>
        {/*  */}
        {/* <Range1/> */}
        {display ? (
          <Range1/>
        ):(<div></div>)}
        <div>
          <Switch>
            <Route path="/range1">
              <Range1 />
            </Route>
            <Route path="/range2">
              <Range2 />
            </Route>
            <Route path="/range3">
              <Range3 />
            </Route>
            <Route path="/range4">
              <Range4 />
            </Route>
            <Route path="/range5">
              <Range5 />
            </Route>
            <Route path="/range6">
              <Range6 />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default Table5;














