import React, { useContext, useEffect, useState } from 'react';
import './style.css';
import Logo from '../../assets/img/logo.png';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ElsegchContext from '../../context/ElsegchContext';
export default function Menu() {
  const Ectx = useContext(ElsegchContext);

  useEffect(() => {});
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Navbar
        collapseOnSelect
        bg="myNav"
        variant="light"
        fixed="top"
        expand="lg"
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand>
            <Link to="/" className='d-flex align-items-center justify-content-evenly gap-2' onClick={() => setExpanded(false)}>
              <img
                src={Logo}
                className="d-inline-block align-top ms-3"
                alt="Их засаг лого"
                height="50px"
              />
              <p className='fs-4 mx-2' 
              style={{fontWeight: "300",
                      fontFamily: "Lato, sans-serif"
                      }}>ИХ ЗАСАГ ЭЛСЭЛТ</p>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle
            onClick={() => {
              setExpanded(expanded ? false : 'expanded');
            }}
          />
          <Navbar.Collapse id="navbarScroll" className="">
            <Nav className="me-auto align-items-center">
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
            {(Ectx.state.burtgel_Id && Ectx.state.email && Ectx.state.emailVerified) ? (
              <Nav className="align-items-center">
                <Link
                  className="fs-4  p-3 mainbtn"
                  to="/my-info"
                  onClick={() => setExpanded(false)}
                >
                  Хувийн мэдээлэл
                </Link>
                <Link
                  className="fs-4  p-3 mainbtn"
                  to="/logout"
                  onClick={() => setExpanded(false)}
                >
                  Гарах
                </Link>
              </Nav>
            ) : (
              <Nav>
                <Link
                  className="fs-4  p-3 mainbtn"
                  to="/login"
                  onClick={() => setExpanded(false)}
                >
                  Бүртгүүлэх
                </Link>
              </Nav>
            )}
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
