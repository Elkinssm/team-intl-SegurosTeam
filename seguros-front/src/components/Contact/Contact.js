import React, { Component } from "react";
import Layout from "../Layout";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./style.scss";

export default class Contact extends Component {
  render() {
    return (
      <Layout>
        <Container className="contact">
          <div>
            <h1>Contactenos</h1>
            <Form onSubmit={e => this.click(e)}>
              <Row>
                <Col>
                  <Form.Group className="form" sm={12} md={12}>
                    <Form.Label>Documento de identidad</Form.Label>
                    <Form.Control
                      type="number"
                      required
                      placeholder="Ingrese su documento de identidad"
                    />
                  </Form.Group>
                  <Form.Group className="form" sm={12} md={12}>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="input"
                      required
                      placeholder="Ingrese su Nombre"
                    />
                  </Form.Group>
                  <Form.Group className="form" sm={12} md={12}>
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control
                      type="input"
                      required
                      placeholder="Ingrese su direccion"
                    />
                  </Form.Group>
                  <Form.Group className="form" sm={12} md={12}>
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                      type="number"
                      required
                      placeholder="Ingrese su telefono"
                    />
                  </Form.Group>
                  <Form.Group className="form" sm={12} md={12}>
                    <Form.Label>País</Form.Label>
                    <Form.Control
                      type="input"
                      required
                      placeholder="Ingrese su País"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="form" sm={12} md={12}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      required
                      placeholder="Ingrese su email"
                    />
                  </Form.Group>
                  <Form.Group className="form" sm={12} md={12}>
                    <Form.Label>Asunto</Form.Label>
                    <Form.Control type="input" required placeholder="Asunto" />
                  </Form.Group>
                  <Form.Group className="form" sm={12} md={12}>
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="8"
                      required
                      placeholder="Ingrese aqui su mensaje"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <br></br>
              <Button variant="success" type="submit">
                Enviar
              </Button>
            </Form>
          </div>
        </Container>
      </Layout>
    );
  }
}
