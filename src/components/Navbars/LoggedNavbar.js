import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const sty = {
  padding: "3rem"
};
function DashNavbar() {
  let location = useLocation();
  const [state, setState] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  const [toggleMenu, setToggleMenu] = useState(false);
  function set() {
    if (location.state) setState(location.state.logged);
  }
  console.log(location.state);
  useEffect(() => {
    console.log(location);
    set();
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <>
      <nav>
        {(toggleMenu || screenWidth > 500) && (
          <ul className="list">
            <Link className="mx-auto item" style={sty} exact to="">
              Yes Home
            </Link>
            <Link className="mx-auto item" style={sty} to="Info">
              Yes Info
            </Link>
            <Link className="mx-auto item" style={sty} to="Information">
              Yes About
            </Link>
            <Link className="mx-auto item" style={sty}>
              Yes Login
            </Link>
          </ul>
        )}
        <button onClick={toggleNav} className="btn">
          BTN
        </button>
      </nav>
    </>
  );
}
export default DashNavbar;
