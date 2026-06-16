import { Container } from "react-bootstrap";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <Container>

        <h2 className="footer-name">
          Choumya M
        </h2>

        <p className="footer-text">
          Software Engineer | ASP.NET Core | React |
          Cloud Technologies
        </p>

        <div className="footer-links">

          <a href="#home">Home</a>

          <a href="#skills">Skills</a>

          <a href="#experience">Experience</a>

          <a href="#projects">Projects</a>

          <a href="#certifications">
            Certifications
          </a>

          <a href="#contact">Contact</a>

        </div>

        <div className="footer-social">

          <a
            href="https://github.com/choumya"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/choumya-m-4b16b3229/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="mailto:choumya0703@gmail.com"
          >
            <FaEnvelope size={28} />
          </a>

        </div>

        <hr className="footer-divider" />

        <p className="copyright">
          © {new Date().getFullYear()} Choumya M.
          All Rights Reserved.
        </p>

      </Container>

    </footer>
  );
}

export default Footer;