import { Container, Row, Col, Button } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profile from "../../assets/profile.png";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";
import { useEffect } from "react";
import axios from "axios";

function Hero() {
useEffect(() => {
  incrementVisitor();
}, []);



  const incrementVisitor = async () => {
    try {
      await axios.post(
        "https://localhost:7009/api/visitor/increment"
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="align-items-center">

          <Col md={7}>
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h5 className="highlight">
                Hello, I'm
              </h5>

              <h1 className="display-2 fw-bold">
                Choumya M
              </h1>

              <TypeAnimation
                sequence={[
                  ".NET Backend Developer",
                  2000,
                  "Cloud Engineer",
                  2000,
                  "AWS Certified Professional",
                  2000,
                  "Full stack Developer",
                  2000,
                  "DevOps Enthusiast",
                  2000,
                ]}
                wrapper="h3"
                repeat={Infinity}
              />

            <p
              className="mt-4"
              style={{
                maxWidth: "700px",
                lineHeight: "1.6",
                textAlign: "justify",
              }}>
              Passionate Software Engineer with experience in developing web applications,
              automation solutions, and cloud-based systems.
              Skilled in C#, .NET, React.js, Python, and modern software development
              practices.
              Dedicated to building scalable, efficient, and user-friendly applications
              that solve real-world problems.
              Strong believer in continuous learning, innovation, and delivering
              high-quality solutions.
              Currently exploring Cloud and DevOps technologies to create reliable,
              automated, and future-ready systems.
            </p>

            <div className="d-flex gap-4 my-4">

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=choumya0703@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hero-social"
            >
              <FaEnvelope size={28} />
            </a>

              <a
                href="https://github.com/choumya"
                target="_blank"
                rel="noreferrer"
                className="hero-social"
              >
                <FaGithub size={28} />
              </a>

              <a
                href="https://www.linkedin.com/in/choumya-m-4b16b3229/"
                target="_blank"
                rel="noreferrer"
                className="hero-social"
              >
                <FaLinkedin size={28} />
              </a>

            </div>

          <Button
            variant="primary"
            className="me-3"
            onClick={async () => {
              try {
                await axios.post(
                  "https://localhost:7009/api/resume/download"
                );

                const link = document.createElement("a");
                link.href = "/resume.pdf";
                link.download = "Choumya_M_Resume.pdf";
                link.click();
              } catch (error) {
                console.error(error);
              }
            }}
          >
            Download Resume
          </Button>

              <a
                href="#projects"
                className="btn btn-outline-light"
                >
                View Projects
                </a>
            </motion.div>
          </Col>

          <Col md={5} className="text-center">

        <img
        src={profile}
        alt="profile"
        className="img-fluid rounded-circle shadow"
        style={{
          width: "420px",
          height: "420px",
          objectFit: "cover",
          objectPosition: "center top"
        }}
        />

           
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Hero;