import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";

function PortfolioNavbar() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="portfolio-navbar"
    >
      <Container>
        <Navbar.Brand href="#">
          Choumya M
        </Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ms-auto align-items-center nav-menu">
            <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >
            Home
          </Link>
     
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >
            Experience
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >
            Projects
          </Link>
           <Link
            activeClass="active"
            to="certifications"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >
            Certifications
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >
            Contact
          </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortfolioNavbar;