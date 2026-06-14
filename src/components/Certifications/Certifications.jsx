import { Container, Row, Col, Card, Button } from "react-bootstrap";
import awsBadge from "../../assets/aws-badge.png";
import sqlBadge from "../../assets/sql-badge.png";
import htmlBadge from "../../assets/html-badge.png";

function Certifications() {
  return (
    <section id="certifications">
      <Container>

        <h2 className="section-title">
          Certifications
        </h2>

        <Row className="justify-content-center">

          {/* AWS */}
          <Col lg={3} md={6} className="mb-4">
            <Card className="card-custom cert-card aws-card text-center p-3 h-100">

              <Card.Img
                src={awsBadge}
                className="certification-image"
              />

              <Card.Body className="d-flex flex-column">

                <h6>AWS Certified Cloud Practitioner</h6>

                <p className="text-info mb-1">
                  Amazon Web Services
                </p>

                <p className="text-secondary mb-2">
                  Issued: Feb 2025
                </p>

                <div className="mt-auto">
                  <Button
                    variant="primary"
                    href="https://www.credly.com/badges/63ee7dcd-dc8e-4f29-b46b-6a44750b2816/linked_in_profile"
                    target="_blank"
                  >
                    View Credential
                  </Button>
                </div>

              </Card.Body>

            </Card>
          </Col>

          {/* C Programming */}
          <Col lg={3} md={6} className="mb-4">
            <Card className="card-custom cert-card c-card text-center p-3 h-100">

              <Card.Img
                src={htmlBadge}
                className="certification-image"
              />

              <Card.Body className="d-flex flex-column">

                <h6>C Programming</h6>

                <p className="text-info mb-1">
                  Great Learning
                </p>

                <p className="text-secondary mb-2">
                  Issued: Oct 2024
                </p>

                <div className="mt-auto">
                  <Button
                    variant="primary"
                    href="https://www.mygreatlearning.com/certificate/JXVQREOG?referrer_code=GLY1GLQ7LYHBK"
                    target="_blank"
                  >
                    View Credential
                  </Button>
                </div>

              </Card.Body>

            </Card>
          </Col>

          {/* SQL */}
          <Col lg={3} md={6} className="mb-4">
            <Card className="card-custom cert-card sql-card text-center p-3 h-100">

              <Card.Img
                src={sqlBadge}
                className="certification-image"
              />

              <Card.Body className="d-flex flex-column">

                <h6>SQL Essential Bootcamp</h6>

                <p className="text-info mb-1">
                  LetsUpgrade
                </p>

                <p className="text-secondary mb-2">
                  Issued: May 2023
                </p>

                <div className="mt-auto">
                  <small
                    style={{
                      color: "#94a3b8",
                      fontStyle: "italic"
                    }}
                  >
                    Credential unavailable
                  </small>
                </div>

              </Card.Body>

            </Card>
          </Col>

          {/* HTML */}
          <Col lg={3} md={6} className="mb-4">
            <Card className="card-custom cert-card html-card text-center p-3 h-100">

              <Card.Img
                src={htmlBadge}
                className="certification-image"
              />

              <Card.Body className="d-flex flex-column">

                <h6>Front-End Web Development - HTML</h6>

                <p className="text-info mb-1">
                  Great Learning
                </p>

                <p className="text-secondary mb-2">
                  Issued: Aug 2022
                </p>

                <div className="mt-auto">
                  <Button
                    variant="primary"
                    href="https://www.mygreatlearning.com/certificate/WYDENGAX?referrer_code=GLY1GLQ7LYHBK"
                    target="_blank"
                  >
                    View Credential
                  </Button>
                </div>

              </Card.Body>

            </Card>
          </Col>

        </Row>

      </Container>
    </section>
  );
}

export default Certifications;