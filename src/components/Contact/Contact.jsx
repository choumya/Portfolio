import { Container, Card } from "react-bootstrap";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        paddingBottom: "200px"
      }}
    >
      <Container>

        <h2 className="section-title">
          Contact Me
        </h2>

        <Card className="card-custom p-4">

          {/* Email */}
          <div className="mb-4">
            <FaEnvelope
              size={24}
              className="me-3"
            />

            <a
              href="mailto:choumya0703@gmail.com"
              className="contact-link"
            >
              choumya0703@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div className="mb-4">
            <FaGithub
              size={24}
              className="me-3"
            />

            <a
              href="https://github.com/choumya"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              GitHub Profile
            </a>
          </div>

          {/* LinkedIn */}
          <div className="mb-4">
            <FaLinkedin
              size={24}
              className="me-3"
            />

            <a
              href="https://www.linkedin.com/in/choumya-m-4b16b3229/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              LinkedIn Profile
            </a>
          </div>

        </Card>

      </Container>
    </section>
  );
}

export default Contact;