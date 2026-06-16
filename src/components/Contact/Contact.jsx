  import { useState } from "react";
  import { Container, Card, Form, Button, Alert } from "react-bootstrap";
  import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
  } from "react-icons/fa";
  import axios from "axios";

  function Contact() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        await axios.post(
          "https://portfolio-api-qtyh.onrender.com/api/contact",
          formData
        );

        setSuccess("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } catch (error) {
        console.error(error);
        setSuccess("Failed to send message.");
      }
    };

    return (
      <section
        id="contact"
        style={{
          minHeight: "100vh",
          paddingBottom: "150px"
        }}
      >
<Container>

  <h2 className="section-title">
    Contact Me
  </h2>

  <div className="contact-container">

    <Card className="card-custom p-4">

            {success && (
              <Alert variant="info">
                {success}
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>

              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>

                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>

                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>

                <Form.Control
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>

                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
              >
                Send Message
              </Button>

            </Form>  

          </Card>
        </div>
        </Container>
      </section>
    );
  }

  export default Contact;
