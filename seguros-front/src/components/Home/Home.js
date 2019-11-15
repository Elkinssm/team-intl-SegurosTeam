import React, { Component } from "react";
import Layout from "../Layout";
import { Form, Button } from "react-bootstrap";
import "./style.scss";

export default class Home extends Component {
  click = e => {
    e.preventDefault();
    //Get data
    const user = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    console.log("user", user, "pass", password);
    //TODO:Get Request to API

    this.props.history.push("./users");
  };

  render() {
    return (
      <Layout>
        <div className="home">
          <h2>Ingresar</h2>
          <Form className="col-12" onSubmit={e => this.click(e)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su correo" />
              <Form.Text className="text-disable">
                Nunca comparta su infomacion con nadie
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                autoComplete="on"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Recordarme" />
            </Form.Group>
            <Button
              variant="success"
              type="submit"
              onClick={() => this.props.history.push("./users")}
            >
              Enviar
            </Button>
            &nbsp;
            <Button
              variant="success"
              type="button"
              onClick={() => this.props.history.push("./sign-up")}
            >
              Registrarse
            </Button>
          </Form>
        </div>
      </Layout>
    );
  }
}
