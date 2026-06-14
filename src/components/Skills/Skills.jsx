import { Container, Row, Col, Card } from "react-bootstrap";

function Skills() {
  const skillCategories = [
    {
      title: "💻 Languages",
      color: "#6f42c1",
      skills: ["C#", "Python", "SQL", "C"],
    },
    {
      title: "🎨 Frontend",
      color: "#4bec42",
      skills: ["React.js", "HTML5", "CSS3", "Bootstrap"],
    },
    {
      title: "⚙️ Backend",
      color: "#198754",
      skills: ["ASP.NET Core", ".NET", "REST APIs", "GraphQL"],
    },
    {
      title: "☁️ Cloud",
      color: "#fd7e14",
      skills: ["AWS", "Azure", "GCP"],
    },
    {
      title: "🚀 DevOps",
      color: "#dc3545",
      skills: ["Git", "Docker", "GitHub Actions", "Linux", "Terraform"],
    },
    {
      title: "🔷 CRM",
      color: "#19b8f8",
      skills: ["Salesforce", "Apex", "Flows"],
    },
    {
      title: "🗄️ Database",
      color: "#9d0bd7",
      skills: ["SQL Server", "PostgreSQL"],
    },
    {
      title: "🛠️ Tools",
      color: "#f50973",
      skills: ["PowerShell", "Visual Studio", "GitHub", "SonarQube"],
    },
  ];

  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="section-title text-center mb-5">
          Technical Skills
        </h2>

        <Row>
          {skillCategories.map((category, index) => (
            <Col lg={3} md={6} className="mb-4" key={index}>
              <Card
                className="card-custom h-100"
                style={{
                  borderTop: `4px solid ${category.color}`,
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Card.Body>
                  <h5
                    className="fw-bold mb-3"
                    style={{
                      color: category.color,
                    }}
                  >
                    {category.title}
                  </h5>

                  <div className="d-flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        style={{
                          backgroundColor: category.color,
                          color: "#fff",
                          padding: "8px 14px",
                          borderRadius: "20px",
                          fontSize: "0.85rem",
                          fontWeight: "500",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
