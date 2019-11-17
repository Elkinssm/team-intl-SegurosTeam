import React, { Component } from "react";
import Layout from "../Layout";
import { Form, Button, Container, Alert } from "react-bootstrap";
import "./style.scss";

class Poliza extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout>
        <Container className="add">
          {this.state.error && (
            <Alert
              variant="danger"
              onClose={() => this.setState({ error: false })}
              dismissible
            >
              Error : {this.state.errorMessage}
            </Alert>
          )}
          <div>
            <h1>Seguro vehicular</h1>
            <Form onSubmit={e => this.click(e)}>
              <Form.Row>
                <Form.Group className="form" sm={12} md={12}>
                  <Form.Label>Marca</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>

                <Form.Group className="form" sm={12} md={12}>
                  <Form.Label>Modelo</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group className="form" sm={12} md={6}>
                  <Form.Label>Año</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Ingrese año"
                  />
                </Form.Group>

                <Form.Group className="form" sm={12} md={6}>
                  <Form.Label>Placa</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Número de placa"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group className="form" sm={12} md={6}>
                <Form.Label>Valor base poliza</Form.Label>
                <Form.Control
                  placeholder="Confirm your password"
                  required
                  value="$ 1'000.000"
                  type="text"
                  readOnly
                />
              </Form.Group>
              <Form.Text className="text-disable">
                <strong>*Valor sujeto a terminos y condiciones.</strong>
              </Form.Text>
              <Button variant="success" type="submit">
                Añadir
              </Button>
              &nbsp;
              <Button variant="success" type="submit">
                Comprar
              </Button>
            </Form>
          </div>
        </Container>
      </Layout>
    );
  }
}

export default Poliza;
