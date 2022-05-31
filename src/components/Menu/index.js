import React, { useEffect, useState } from 'react';
import MenuItem from '../MenuItem';
import './style.css';
import Contex from '../../context';
import Logo from '../../assets/img/logo.png';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Menu() {
  function logout() {
    Contex.st = false;
    Contex.succ = false;
    Contex.bt = '0';
  }

  useEffect(() => {});
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Navbar
        collapseOnSelect
        bg="myNav"
        variant="light"
        sticky="top"
        expand="sm"
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand>
            <Link to="/" onClick={() => setExpanded(false)}>
              <img
                src={Logo}
                className="d-inline-block align-top ms-3"
                alt="Их засаг лого"
                height="50px"
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle
            onClick={() => {
              setExpanded(expanded ? false : 'expanded');
            }}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <Link
                className="nav-link p-3 fs-4 mx-4"
                to="/info"
                onClick={() => setExpanded(false)}
              >
                Хөтөлбөрүүд
              </Link>
              <Link
                className="nav-link fs-4 p-3 mx-4"
                to="/school"
                onClick={() => setExpanded(false)}
              >
                Салбар сургууль
              </Link>
            </Nav>
            <Nav>
              <Link
                className="fs-4  p-3 mainbtn"
                to="/login"
                onClick={() => setExpanded(false)}
              >
                Бүртгүүлэх
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
  // // }
  // //salbar surguuli - /info
  // //hutulbur - /schools
  // //medeelel oruulah -/med
  // //garah -/logout
}
