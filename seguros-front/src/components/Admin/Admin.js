import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Vehiculo from "../Vehiculo";
import Layout from "../Layout";
import axios from "axios";
import { Container, Jumbotron, Card, Table, Row, Col } from "react-bootstrap";
import "./style.scss";

export class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: []
    };
  }

  componentDidMount() {
    this.setState({ usuarios: [] });
    axios.get(`https://localhost:5001/api/v2/Usuario/GetAll`).then(res => {
      const usuarios = res.data;
      console.log(usuarios);
      this.setState({ usuarios });
    });
  }

  render() {
    const usuarios = this.state.usuarios;
    debugger;
    const userItems = usuarios.map(u => (
      <tr key={u.Id}>
        <th>{u.Nombre}</th>
        <th>{u.Apellido}</th>
        <th>{u.NumeroDocumento}</th>
      </tr>
    ));
    return (
      <Layout>
        <Switch>
          <Route exact path="/vehiculo" Component={Vehiculo}></Route>
        </Switch>
        <Jumbotron fluid className="move">
          <Container>
            <h1>Panel de Administrador</h1>
            <Row>
              <Col>
                <Card>
                  <Card.Body className="panel">
                    <ul>
                      <li>
                        <a href="/vehiculo">Registrar Vehiculo</a>
                      </li>
                      <li>
                        <a href="/add">Asegurar vehiculo</a>
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }} className="img-bg">
                  <Card.Img
                    variant="top"
                    src="https://image.flaticon.com/icons/svg/1118/1118898.svg"
                  />
                  <Card.Body className="card-body">
                    <Card.Title>Admin</Card.Title>
                    <Card.Text>Datos administrador</Card.Text>
                  </Card.Body>
                </Card>
                <p>
                  Administre todos los vehiculos
                  <br /> y polizas registrados en el sistema
                </p>
              </Col>
            </Row>
          </Container>
          <Table striped bordered hover variant="dark" className="tb">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Numero Documento</th>
                <th>Add</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{userItems} </td>

                <td></td>

                <td></td>

                <td>
                  <button
                    type="button"
                    class="btn  rounded-circle d-flex align-content-center"
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    id="red"
                    type="button"
                    class="btn rounded-circle d-flex justy-content-center"
                  >
                    -
                  </button>
                </td>
              </tr>
              {/* <tr>
                

                <td></td>

                <td></td>

                <td></td>

                <td>
                  <button
                    type="button"
                    class="btn  rounded-circle d-flex align-content-center"
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    id="red"
                    type="button"
                    class="btn rounded-circle d-flex align-content-center"
                  >
                    -
                  </button>
                </td>
              </tr>
              <tr>
                
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button
                    type="button"
                    class="btn rounded-circle d-flex align-content-center"
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    id="red"
                    type="button"
                    class="btn rounded-circle d-flex align-content-center"
                  >
                    -
                  </button>
                </td>
              </tr> */}
            </tbody>
          </Table>
        </Jumbotron>
      </Layout>
    );
  }
}

export default Users;
