import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import "./style.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="fondo">
      <footer className="footer mt-auto py-3 bg-color">
        <span className="text-muted">
          <h5>&nbsp;&nbsp;&nbsp;Created by: Elkin Silva</h5>
          <h5>
            <Nav.Link href="https://github.com/Elkinssm" target="_blank">
              Github
            </Nav.Link>
          </h5>
        </span>
      </footer>
      </div>
    );
  }
}
