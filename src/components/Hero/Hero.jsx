import { Container, Row, Col, Button } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profile from "../../assets/profile.png";

function Hero() {
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

            <Button
            variant="primary"
            href="/resume.pdf"
            download
            className="me-3"
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