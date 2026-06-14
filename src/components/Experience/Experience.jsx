import { Container } from "react-bootstrap";

function Experience() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Larsen & Toubro Technology Services (LTTS)",
      duration: "Dec 2024 - Present",
      icon: "💼",

  responsibilities: [
    "Designed and developed 40+ scalable RESTful APIs using ASP.NET Core, C#, and GraphQL (HotChocolate) for enterprise applications.",
    "Integrated AWS services including S3, DynamoDB, IAM, and Kinesis to build reliable cloud-native backend solutions.",
    "Implemented JWT authentication and Role-Based Access Control (RBAC) authorization policies.",
    "Built an end-to-end firmware distribution workflow covering component creation, versioning, distribution rules, and secure blob uploads.",
    "Implemented Redis caching for high-frequency APIs, reducing response latency by 40% and improving application performance.",
    "Optimized PostgreSQL queries and EF Core data access, reducing database latency by 35%.",
    "Enhanced observability through structured logging using LoggerMessage partial methods, reducing debugging effort by 50%.",
    "Collaborated in Agile development, code reviews, and design reviews, accelerating release cycles by 25%."
  ]

    },
    {
      role: "Software Development Intern",
      company: "Avasoft",
      duration: "Feb 2024 - Aug 2024",
      icon: "☁️",
      responsibilities: [
        "Developed Salesforce applications using Apex and Salesforce declarative tools.",
        "Created custom dashboards and reports to improve business visibility.",
        "Automated workflows and approval processes using Salesforce Flows.",
        "Worked on CRM customization, data migration, and validation.",
        "Collaborated with team members to deliver scalable Salesforce solutions."
      ]
    }
  ];

  return (
    <section id="experience" className="py-5">
      <Container fluid style={{ maxWidth: "1400px" }}>
        <h2 className="section-title text-center mb-5">
          Experience Journey
        </h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-icon">
                {exp.icon}
              </div>

              <div className="card-custom timeline-card p-4">
                <h3>{exp.role}</h3>

                <h5 className="company-name">
                  {exp.company}
                </h5>

                <p className="duration">
                  {exp.duration}
                </p>

                <ul>
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Experience;

