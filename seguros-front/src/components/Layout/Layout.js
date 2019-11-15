import React from "react";
import Container from "react-bootstrap/Container";
import Menu from "./Menu";
import Footer from "./Footer";
import "./style.scss";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Container fluid className="layout ">
          <header className="d-flex justify-content-center flex-column align-items-center">
            <Menu />
          </header>
          <Container className="dinamic-content">
            {this.props.children}
          </Container>

          <Footer />
        </Container>
      </div>
    );
  }
}
