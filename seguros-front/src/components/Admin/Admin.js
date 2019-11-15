import React, { Component } from "react";
import Layout from "../Layout";
import { Container, Jumbotron, Card, Table } from "react-bootstrap";

import "./style.scss";

export class Users extends Component {
  render() {
    return (
      <Layout>
        <Jumbotron fluid className="move">
          <Container>
            <h1>Panel de Administrador</h1>
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
          </Container>
          <Table striped bordered hover variant="dark" className="tb">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Add</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
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
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
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
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
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
              </tr>
            </tbody>
          </Table>
        </Jumbotron>
      </Layout>
    );
  }
}

export default Users;
