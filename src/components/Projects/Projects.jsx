import { Container, Row, Col, Card, Button, Badge, Modal } from "react-bootstrap";
import { useState } from "react";
import ems from "../../assets/ems.png";
import uploader from "../../assets/uploader.png";
import patchDownloader from "../../assets/patch-downloader.png";

function Projects() {
   const [showModal, setShowModal] = useState(false);
   const [selectedProject, setSelectedProject] = useState(null);

    const openProject = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  
  return (
    <section id="projects">
      <Container>

        <h2 className="section-title">
          Featured Projects
        </h2>

        <Row>

          {/* EMS */}
          <Col lg={4} className="mb-4">
            <Card className="project-card h-100 shadow">

              <Card.Img
                variant="top"
                src={ems}
                style={{
                  height: "250px",
                  objectFit: "cover",
                }}
              />

              <Card.Body className="d-flex flex-column">
                <Card.Title className="fs-4 fw-bold">
                  Energy Management System
                </Card.Title>

                <Card.Text>
                  A full-stack energy monitoring platform that provides real-time visibility into energy consumption, system health, and operational metrics through interactive dashboards and analytics. The application enables users to monitor energy usage trends, identify anomalies, and make data-driven decisions.
                </Card.Text>

                <div className="mb-3">

                  <Badge bg="primary" className="me-2">
                    ASP.NET Core
                  </Badge>

                  <Badge bg="success" className="me-2">
                    React js
                  </Badge>

                  <Badge bg="warning" text="dark" className="me-2">
                    SQL Server
                  </Badge>

                  <Badge bg="info">
                    Bootstrap
                  </Badge>

                   <Badge bg="danger" className="me-2">
                    Entity Framework Core
                  </Badge>

                </div>
            <div className="mt-auto pt-3 d-flex gap-2">
              <Button
                variant="outline-info"
                className="me-2"
                onClick={() =>
                openProject({
                  title: "Energy Management System",

                  summary: [
                    "Developed a secure full-stack application for monitoring and analyzing energy consumption data.",
                    "Built REST APIs using ASP.NET Core to manage energy metrics, alerts, and reporting.",
                    "Designed responsive dashboards in React.js for visualizing energy trends and operational insights.",
                    "Implemented JWT-based authentication and authorization for secure user access.",
                    "Integrated SQL Server for efficient storage and retrieval of historical and real-time energy data.",
                    "Developed reporting and analytics modules to support energy optimization initiatives."
                  ],

                  github:
                    "https://github.com/choumya/EnergyManagementSystem",
                })

                }
              >
                View Details
              </Button>

              <Button
                variant="primary"
                href="https://github.com/choumya/EnergyManagementSystem"
                target="_blank"
              >
                View GitHub
              </Button>
              </div>

              </Card.Body>

            </Card>
          </Col>

          {/* Large File Uploader */}
          <Col lg={4} className="mb-4">
            <Card className="project-card h-100 shadow">

              <Card.Img
                variant="top"
                src={uploader}
                style={{
                  height: "250px",
                  objectFit: "cover",
                }}
              />

              <Card.Body className="d-flex flex-column">
                <Card.Title className="fs-4 fw-bold">
                  Large File Uploader
                </Card.Title>

                <Card.Text>
                  A cloud-agnostic desktop application that enables reliable upload of large files to Azure Blob Storage, AWS S3, and Google Cloud Storage through chunking, parallel uploads, and checksum validation.

                </Card.Text>

                <div className="mb-3">

                  <Badge bg="primary" className="me-2">
                    .Net 8
                  </Badge>

                  <Badge bg="success" className="me-2">
                    WinForms
                  </Badge>

                  <Badge bg="warning" text="dark" className="me-2">
                    Azure Blob Storage
                  </Badge>

                  <Badge bg="danger" className="me-2">
                    AWS S3
                  </Badge>

                  <Badge bg="info">
                    Google Cloud Storage
                  </Badge>

                </div>
            <div className="mt-auto pt-3 d-flex gap-2">
            <Button
              variant="outline-info"
              className="me-2"
              onClick={() =>
              openProject({
                title: "Large File Uploader",

                summary: [
                  "Designed a reusable chunking engine to split large files into configurable chunks.",
                  "Implemented parallel upload processing to improve upload speed and overall performance.",
                  "Built checksum validation components to verify file integrity after upload.",
                  "Developed cloud-provider-specific implementations for Azure Blob Storage, AWS S3, and Google Cloud Storage.",
                  "Applied the Factory Pattern to dynamically select cloud providers through configuration.",
                  "Created a user-friendly WinForms interface with upload progress tracking and status monitoring.",
                  "Implemented logging, error handling, and retry mechanisms to improve reliability.",
                  "Developed comprehensive unit tests to validate chunking, upload, and checksum workflows."
                ],

                github:
                  "https://github.com/choumya/LargeFileUploader",
              })

              }
            >
              View Details
            </Button>

            <Button
              variant="primary"
              href="https://github.com/choumya/LargeFileUploader"
              target="_blank"
            >
              View GitHub
            </Button>
            </div>

              </Card.Body>

            </Card>
          </Col>
          <Col lg={4} className="mb-4">

  <Card className="project-card h-100 shadow">

    <Card.Img
      variant="top"
      src={patchDownloader}
      style={{
        height: "250px",
        objectFit: "cover",
      }}
    />
 <Card.Body className="d-flex flex-column">
 
    <Card.Title className="fs-4 fw-bold">
        Automated Patch Downloader System
      </Card.Title>

      <Card.Text>
        An enterprise patch management solution that automates software update distribution from AWS S3 to client machines.

      </Card.Text>

      <div className="mb-3">

        <Badge bg="primary" className="me-2">
          C#
        </Badge>

        <Badge bg="warning" text="dark" className="me-2">
          PowerShell
        </Badge>

        <Badge bg="success" className="me-2">
          AWS S3
        </Badge>

        <Badge bg="danger" className="me-2">
          Windows Task Scheduler
        </Badge>
      </div>
<div className="mt-auto pt-3 d-flex gap-2">
      <Button
      variant="outline-info"
      className="me-2"
      onClick={() =>
      openProject({
        title:
          "Automated Patch Downloader System",

        summary: [
          "Developed a PowerShell-based patch download engine integrated with AWS S3.",
          "Built a lightweight C# launcher application to execute patch deployment workflows.",
          "Retrieved patch files from S3 using configured credentials and storage settings.",
          "Implemented SHA-256 checksum validation to ensure downloaded files were not corrupted.",
          "Added timestamp logging and execution history tracking for auditing purposes.",
          "Integrated Windows Task Scheduler for automated and recurring patch deployment.",
          "Designed the solution to operate without administrator privileges.",
          "Reduced manual effort and improved reliability of software update distribution."
        ],

        github: "#",
      })

      }
    >
      View Details
    </Button>

    <Button
      variant="primary"
      href="#"
    >
      View GitHub
    </Button>
    </div>

    </Card.Body>

  </Card>

</Col>  

        </Row>

      </Container>
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      centered
      size="lg"
    >

      <Modal.Header closeButton>
        <Modal.Title>
          {selectedProject?.title}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>

      <div className="text-center p-3">

        <h5
          style={{
            color: "#38bdf8",
            marginBottom: "20px",
          }}
        >
          📌 Project Overview
        </h5>
      <ul
        style={{
          fontSize: "1rem",
          lineHeight: "1.8",
          color: "#d1d5db",
          textAlign: "left",
        }}
      >
        {selectedProject?.summary?.map(
          (point, index) => (
            <li
              key={index}
              style={{
                marginBottom: "1px",
              }}
            >
              {point}
            </li>
          )
        )}
      </ul>

      </div>

      </Modal.Body>

      <Modal.Footer>

        <Button
          variant="primary"
          href={selectedProject?.github}
          target="_blank"
        >
          View GitHub
        </Button>

        <Button
          variant="secondary"
          onClick={() =>
            setShowModal(false)
          }
        >
          Close
        </Button>

      </Modal.Footer>

    </Modal>
    </section>
    
  );
}

export default Projects;