import React, { Component } from "react";
import Layout from "../Layout";
import axios from "axios";
import { Form, Button, Container, Alert } from "react-bootstrap";
import "./style.scss";

class Vehiculo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marcas: [],
      modelos: [],
      marca: "",
      modelo: "",
      placa: "",
      fechaCompra: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getModelos = this.getModelos.bind(this);
  }

  componentDidMount() {
    axios.get(`https://localhost:5001/api/v2/Marca/GetAll`).then(res => {
      const marcas = res.data;
      console.log(marcas);
      this.setState({ marcas });
    });
  }

  getModelos(marca) {
    axios
      .get(`https://localhost:5001/api/v2/Modelo/GetByMarca`, {
        params: { marca }
      })
      .then(res => {
        debugger;
        const modelos = res.data;
        console.log(modelos);
        this.setState({ modelos });
      });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    if (name === "marca") {
      this.getModelos(value);
    }
  }

  handleSubmit(event) {
    const headers = {
      "Content-Type": "application/json"
    };
    const vehiculo = {
      marcaId: this.state.marca,
      modeloId: this.state.modelo,
      placa: this.state.placa,
      fechaCompra: this.state.fechaCompra
    };

    axios
      .post(
        `https://localhost:5001/api/v2/Vehiculo/RegistrarVehiculo`,
        vehiculo,
        { headers }
      )
      .then(response => {
        debugger;
        alert("Vehiculo registrado: " + this.state.modelo);
      })
      .catch(e => {
        debugger;
        alert("Se ha presentado un error: ");
      });
    event.preventDefault();
  }

  render() {
    const { marcas, modelos } = this.state;

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
            <Form onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group className="form" sm={12} md={12}>
                  <Form.Label>Marca</Form.Label>
                  <Form.Control
                    as="select"
                    name="marca"
                    value={this.state.marca}
                    onChange={this.handleInputChange}
                  >
                    {marcas.map((option, index) => {
                      return (
                        <option key={index} value={option.id}>
                          {option.nombre}
                        </option>
                      );
                    })}
                  </Form.Control>
                </Form.Group>

                <Form.Group className="form" sm={12} md={12}>
                  <Form.Label>Modelo</Form.Label>
                  <Form.Control
                    as="select"
                    name="modelo"
                    value={this.state.modelo}
                    onChange={this.handleInputChange}
                  >
                    <option value=""></option>
                    {modelos.map((option, index) => {
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
                  <Form.Label>Placa</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Número de placa"
                    name="placa"
                    value={this.state.placa}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group className="form" sm={12} md={6}>
                <Form.Label>Fecha de Compra</Form.Label>
                <Form.Control
                  placeholder="Fecha de Compra"
                  required
                  type="date"
                  name="fechaCompra"
                  value={this.state.fechaCompra}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              <Button variant="success" type="submit">
                Añadir
              </Button>
              &nbsp;
            </Form>
          </div>
        </Container>
      </Layout>
    );
  }
}

export default Vehiculo;
