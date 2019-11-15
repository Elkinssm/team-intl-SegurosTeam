import React, { Component } from "react";
import Layout from "../Layout";
import "./style.scss";

import { Container, Jumbotron } from "react-bootstrap";

class Start extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Jumbotron fluid className="bg-start">
          <Container>
            <h1>Bienvenido a Team Seguros</h1>
            <p>
              Ese carro que tanto esfuerzo te costó conseguir también merece un
              cuidado especial en cualquier situación. El Seguro Todo Riesgo
              Automóviles está diseñado como una alternativa de cobertura
              integral a un excelente precio. Protege la inversión de tu
              vehículo y cubre los daños a terceros causados por accidentes de
              tránsito. <br />
              <br />
              <h5>Se otorga protección tanto a la persona como al vehículo:</h5>
            </p>
            <ul>
              <li>
                Responsabilidad Civil Extracontractual - Amparo de Protección
                Patrimonial.
              </li>
              <li>Pérdida Total del Vehículo por Daños.</li>
              <li>Pérdida Parcial del Vehículo por Daños.</li>
              <li>
                Pérdida Total o Pérdida Parcial del Vehículo por Hurto o Hurto
                Calificado.
              </li>
              <li>
                Amparo de Gastos de Grúa, Transporte y Protección del Vehículo
                Accidentado.
              </li>
              <li>Temblor, Terremoto o Erupción Volcánica.</li>
            </ul>

            <p>
              Póliza emitida por la Compañía de Seguros Team. con más de 20 años
              de experiencia en el sector.
            </p>
            <a
              href="https://drive.google.com/file/d/1IZjVvHywaRfwSviOIQiPJEvC9dAD7WNB/view?usp=sharing"
              target="_blank"
            >
              Condiciones generales
            </a>
          </Container>
        </Jumbotron>
      </Layout>
    );
  }
}

export default Start;
