import React, { Component } from "react";
import Layout from "../Layout";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import "./style.scss";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
      vehiculos: [],
      usuario: "",
      vehiculo: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    axios.get(`https://localhost:5001/api/v2/Usuario/GetAll`).then(res => {
      const usuarios = res.data.result;
      console.log(usuarios);
      this.setState({ usuarios });
    });

    axios
      .get(`https://localhost:5001/api/v2/Vehiculo/TraerVehiculosNoRegistrados`)

      .then(res => {
        const vehiculos = res.data.result;
        console.log(vehiculos);
        this.setState({ vehiculos });
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
    const seguro = {
      vehiculoId: this.state.vehiculo,
      usuarioId: this.state.usuario
    };
    debugger;
    // let history = useHistory();
    axios
      .post(`https://localhost:5001/api/v2/Seguro/AsegurarVehiculo`, seguro, {
        headers: headers
      })
      .then(response => {
        alert("Vehiculo asegurado");
      })
      .catch(e => {
        alert("Se ha presentado un error: " + e.toString());
      });
    event.preventDefault();
  }
  render() {
    const { usuarios, vehiculos } = this.state;
    return (
      <Layout>
        <div className="add">
          <h2>Asegurar</h2>
          <Form className="col-12" onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                as="select"
                name="usuario"
                value={this.state.usuario}
                onChange={this.handleInputChange}
              >
                <option value=""></option>
                {usuarios.map((option, index) => {
                  return (
                    <option key={index} value={option.id}>
                      {option.nombre}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Vehiculo</Form.Label>
              <Form.Control
                as="select"
                name="vehiculo"
                value={this.state.vehiculo}
                onChange={this.handleInputChange}
              >
                <option value=""></option>
                {vehiculos.map((option, index) => {
                  return (
                    <option key={index} value={option.id}>
                      {option.placa}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>

            <Button variant="success" type="submit">
              Agregar
            </Button>
          </Form>
        </div>
      </Layout>
    );
  }
}

export default Add;
