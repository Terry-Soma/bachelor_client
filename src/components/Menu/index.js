import React, { useEffect } from "react";
import MenuItem from "../MenuItem";
import css from "./style.module.css";
import Contex from "../../context";
import Logo from "../Logo";
import { Container, Navbar, Offcanvas, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Menu() {
  function logout() {
    Contex.st = false;
    Contex.succ = false;
    Contex.bt = "0";
  }
  //salbar surguuli - /info
  //hutulbur - /schools
  //burtguuleh -/login
  useEffect(() => {});
  if (Contex.st === false) {
    return (
      <>
        <Navbar
          fixed="top"
          className={css["header"]}
          key="xl"
          bg="primary"
          expand="xl"
          className="mb-3"
        >
          <Container fluid>
            <Navbar.Toggle
              style={{ color: "white" }}
              aria-controls={`offcanvasNavbar-expand-"xl"`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-"xl"`}
              aria-labelledby={`offcanvasNavbarLabel-expand-"xl"`}
              placement="end"
            >
              <Offcanvas.Header
                style={{ backgroundColor: "rgb(32, 32, 32)" }}
                className="my-auto"
                closeButton
              >
                <Offcanvas.Title
                  className={css["title"]}
                  id={`offcanvasNavbarLabel-expand-"xl"`}
                >
                  Их Засаг
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className={css["header"]}>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Link className={css["Header-nav"]} to="/">
                    <div className={css["nav-top"]} />
                    {/* <Logo /> */}
                    Logo
                    <div className={css["nav-bottom"]} />
                  </Link>
                  <Link className={css["Header-nav"]} to="/Info">
                    <div className={css["nav-top"]} />
                    Салбар сургууль
                    <div className={css["nav-bottom"]} />
                  </Link>
                  <Link
                    className={css["Header-nav"]}
                    to="/schools"
                    state={{ Sch_Id: 6 }}
                  >
                    <div className={css["nav-top"]} />
                    Хөтөлбөрүүд
                    <div className={css["nav-bottom"]} />
                  </Link>
                  <Link className={css["Header-nav"]} to="/Login">
                    <div className={css["nav-top"]} />
                    Бүртгүүлэх
                    <div className={css["nav-bottom"]} />
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </>
    );
  }
  //salbar surguuli - /info
  //hutulbur - /schools
  //medeelel oruulah -/med
  //garah -/logout
  else {
    return (
      <>
        <Navbar
          className={css["header"]}
          key="xl"
          bg="primary"
          expand="xl"
          className="mb-3"
        >
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-"xl"`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-"xl"`}
              aria-labelledby={`offcanvasNavbarLabel-expand-"xl"`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  className="Header-Title"
                  id={`offcanvasNavbarLabel-expand-"xl"`}
                >
                  Их Засаг
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Link className={css["Header-nav"]} to="/">
                    <div className={css["nav-top"]} />
                    {/* <Logo /> */}
                    Logo
                    <div className={css["nav-bottom"]} />
                  </Link>
                  <Link className={css["Header-nav"]} to="/Info">
                    <div className={css["nav-top"]} />
                    Салбар сургууль
                    <div className={css["nav-bottom"]} />
                  </Link>
                  <Link
                    className={css["Header-nav"]}
                    to="/schools"
                    state={{ Sch_Id: 6 }}
                  >
                    <div className={css["nav-top"]} />
                    Хөтөлбөрүүд
                    <div className={css["nav-bottom"]} />
                  </Link>
                  <Link className={css["Header-nav"]} to="/med">
                    <div className={css["nav-top"]} />
                    Мэдээлэл оруулах
                    <div className={css["nav-bottom"]} />
                  </Link>
                  <Link onClick={logout} className={css["Header-nav"]}>
                    <div className={css["nav-top"]} />
                    Гарах
                    <div className={css["nav-bottom"]} />
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </>
    );
  }
}
