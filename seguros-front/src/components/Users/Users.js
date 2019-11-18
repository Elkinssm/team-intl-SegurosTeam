import React, { Component } from "react";
import Layout from "../Layout";
import axios from "axios";
import { Container, Jumbotron, Card, Table } from "react-bootstrap";

import "./style.scss";

export class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehiculos: []
    };

    this.getClienteId = this.getClienteId.bind(this);
  }

  componentDidMount() {
    debugger;
    var clienteId = this.getClienteId();
    axios
      .get(`https://localhost:5001​/api/v2/Vehiculo/TraerVehiculosCliente`, {
        params: { clienteId }
      })
      .then(res => {
        const vehiculos = res.data.result;
        console.log(vehiculos);
        this.setState({ vehiculos });
      });
  }
  getClienteId() {
    // Retrieves the user id from localStorage
    return localStorage.getItem("id_cliente");
  }

  render() {
    const { vehiculos } = this.state;
    const vehiculosItems = vehiculos.map(v => <li>{v}</li>);

    return (
      <Layout>
        <Jumbotron fluid className="move">
          <Container>
            <h1>Panel de Usuario </h1>
            <Card style={{ width: "18rem" }} className="img-bg">
              <Card.Img
                variant="top"
                src="https://image.flaticon.com/icons/svg/149/149071.svg"
              />
              <Card.Body className="card-body">
                <Card.Title>Usuario</Card.Title>
                <Card.Text>Datos usuario</Card.Text>
              </Card.Body>
            </Card>
            <div className="txtmove">
              <p>
                Administre todos sus vehiculos registrados,
                <br /> cotize y registre sus diferente
                <br />
                polizas adquiridas con nosotros.
              </p>
            </div>
          </Container>
          <Table striped bordered hover variant="dark" className="tab">
            <thead>
              <tr>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Todo</th>
                <th>Add</th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
        </Jumbotron>
      </Layout>
    );
  }
}

export default Users;
