import React, { Component } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import "./style.scss";
import Layout from "../Layout";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      errorMessage: "",
      tipoDocumentos: [],
      ciudades: [],
      usr_nombre: "",
      usr_apellido: "",
      usr_ciudad: "",
      usr_documento: "",
      usr_fecha_nacimiento: "",
      usr_tipo_documento: "",
      usr_email: "",
      usr_password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get(`https://localhost:5001/api/v2/Ciudad/GetAll`).then(res => {
      const ciudades = res.data;
      console.log(ciudades);

      this.setState({ ciudades });
    });
    axios
      .get(`https://localhost:5001/api/v2/TipoDocumento/GetAll`)
      .then(res => {
        const documentos = res.data;
        console.log(documentos);

        this.setState({ tipoDocumentos: documentos });
      });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const headers = {
      "Content-Type": "application/json"
    };
    const user = {
      nombre: this.state.usr_nombre,
      apellido: this.state.usr_apellido,
      tipoDocumentoId: this.state.usr_tipo_documento,
      numeroDocumento: this.state.usr_documento,
      fechaNacimiento: this.state.usr_fecha_nacimiento,
      ciudadId: this.state.usr_ciudad,
      rolId: "02f2479e-caa0-4ea1-9a46-e38b5bd6e8d0",
      email: this.state.usr_email,
      clave: this.state.usr_password
    };

    axios
      .post(`https://localhost:5001/api/v2/Usuario/SaveUser`, user, {
        headers: headers
      })
      .then(response => {
        alert("Usuario registrado: " + this.state.usr_email);
      })
      .catch(e => {
        alert("Se ha presentado un error: ");
      });
    event.preventDefault();
  }

  render() {
    const { ciudades, tipoDocumentos } = this.state;
    return (
      <Layout>
        <Container className="login">
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
            <h1>Registro De Usuarios</h1>
            <Form onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group className="form" sm={12} md={12}>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Ingrese su nombre"
                    name="usr_nombre"
                    value={this.state.usr_nombre}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>

                <Form.Group className="form" sm={12} md={12}>
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Ingrese su apellido"
                    name="usr_apellido"
                    value={this.state.usr_apellido}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group className="form" sm={12} md={6}>
                  <Form.Label>Tipo de documento</Form.Label>
                  <Form.Control
                    as="select"
                    name="usr_tipo_documento"
                    value={this.state.usr_tipo_documento}
                    onChange={this.handleInputChange}
                  >
                    <option value=""></option>
                    {tipoDocumentos.map((option, index) => {
                      return (
                        <option key={index} value={option.id}>
                          {option.nombre}
                        </option>
                      );
                    })}
                  </Form.Control>
                </Form.Group>

                <Form.Group className="form" sm={12} md={6}>
                  <Form.Label>Número de Documento</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Ingrese su número de documento"
                    name="usr_documento"
                    value={this.state.usr_documento}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group className="form" sm={12} md={6}>
                  <Form.Label>Fecha Nacimiento</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    name="usr_fecha_nacimiento"
                    value={this.state.usr_fecha_nacimiento}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>

                <Form.Group className="form" sm={12} md={6}>
                  <Form.Label>Ciudad</Form.Label>

                  <Form.Control
                    as="select"
                    name="usr_ciudad"
                    onChange={this.handleInputChange}
                    value={this.state.usr_ciudad}
                  >
                    <option value=""></option>
                    {ciudades.map((option, index) => {
                      return (
                        <option key={index} value={option.id}>
                          {option.nombre}
                        </option>
                      );
                    })}
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group className="form" sm={12} md={6}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    required
                    placeholder="Ingrese su correo"
                    name="usr_email"
                    value={this.state.usr_email}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>

                <Form.Group className="form" sm={12} md={6}>
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    required
                    placeholder="Ingrese su contraseña"
                    name="usr_password"
                    value={this.state.usr_password}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
              </Form.Row>

              <Button
                variant="success"
                type="submit"
                onClick={() => this.props.history.push("./home")}
              >
                Enviar
              </Button>
            </Form>
          </div>
        </Container>
      </Layout>
    );
  }
}
