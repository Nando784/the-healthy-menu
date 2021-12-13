import React from "react";
import { Link } from "react-router-dom";

import style from "../style/NavBar.module.css";

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Navbar from "react-bootstrap/Navbar";


function NavBar() {

    return (
      <Navbar className={style.nav} expand="lg" fixed="top">
        <Container className={style.container}>
          <Navbar.Toggle
            className={style.togglerButton}
            aria-controls="basic-navbar-nav"
          />

          <Navbar.Collapse id="basic-navbar-nav">
            <Container fluid="lg">
              <Row>
                <Col className={style.linkContainer}>
                  <Link className={style.link} to="/">
                    <p>Home</p>
                  </Link>
                </Col>

                <Col className={style.linkContainer}>
                  <Link className={style.link} to="/course">
                    <p>Course</p>
                  </Link>
                </Col>

                <Col className={style.linkContainer}>
                  <Link className={style.link} to="/dietary">
                    <p>Dietary</p>
                  </Link>
                </Col>

                <Col className={style.linkContainer}>
                  <Link className={style.link} to="/intolerance">
                    <p>Intolerance</p>
                  </Link>
                </Col>

                <Col className={style.linkContainer}>
                  <Link className={style.link} to="/country">
                    <p>Country</p>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar;
