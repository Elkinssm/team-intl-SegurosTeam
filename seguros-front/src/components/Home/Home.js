import React, { Component } from "react";
import Layout from "../Layout";
import axios from "axios";
import decode from "jwt-decode";
import { Form, Button } from "react-bootstrap";
import "./style.scss";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      errorMessage: "",
      usr_email: "",
      usr_password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      email: this.state.usr_email,
      clave: this.state.usr_password
    };

    // let history = useHistory();
    axios
      .post(`https://localhost:5001/api/v2/Usuario/Authenticate`, user, {
        headers: headers
      })
      .then(response => {
        let user = response.data.result;
        const token = user.token;
        this.setToken(token); // Setting the token in localStorage
        debugger;
        if (user.rolId === "Cliente") {
          alert("Soy cliente");
          this.props.history.push("/users");
        } else if (user.rolId === "Admin") {
          alert("Soy admin");
          this.props.history.push("/admin");
        } else {
          this.props.history.push("/");
        }
        debugger;
        // return Promise.resolve(response);
      })
      .catch(e => {
        alert("Se ha presentado un error: " + e.toString());
      });
    event.preventDefault();
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken(); // GEtting token from localstorage
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired. N
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  setToken(idToken) {
    // Saves user token to localStorage
    localStorage.setItem("id_token", idToken);
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
  }

  getProfile() {
    // Using jwt-decode npm package to decode the token
    return decode(this.getToken());
  }

  render() {
    return (
      <Layout>
        <div className="home">
          <h2>Ingresar</h2>
          <Form className="col-12" onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su correo"
                name="usr_email"
                onChange={this.handleInputChange}
              />
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
                name="usr_password"
                value={this.state.usr_password}
                onChange={this.handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Recordarme" />
            </Form.Group>
            <Button variant="success" type="submit">
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
