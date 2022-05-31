import React from "react";
import { Link } from "react-scroll";

function Rink(props) {
  return (
    <Link
      activeClass="active"
      to={props.loc}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
    >
      Устгах
    </Link>
  );
}
export default Rink;
