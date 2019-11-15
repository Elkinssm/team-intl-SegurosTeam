import React, { Component } from "react";
import Layout from "../Layout";
import { Jumbotron, Container } from "react-bootstrap";
import "./style.scss";
export default class Credits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valorPrestamo: 100000,
      plazo: 1
    };
  }

  render() {
    return (
      <Layout>
        <Jumbotron fluid className="back">
          <Container>
            <h1>¿Qué cubre una póliza de seguro contra todo riesgo?</h1>

            <h5> Un seguro de vehículo cubre:</h5>
            <ul>
              <li>
                <strong>Responsabilidad Civil:</strong> es la cobertura más importante del seguro
                voluntario de automóviles. Cubre las lesiones corporales,
                fallecimiento o daños a bienes de terceras personas víctimas del
                accidente. Específicamente, alivia las finanzas del asegurado,
                ya que no deberá recurrir a su patrimonio o ahorros para pagar
                por los daños de los que resulte responsable.
              </li>
              <li>
                <strong>Asistencia Jurídica:</strong> es una cobertura que viene de la mano con
                la Responsabilidad Civil y le da al asegurado, el derecho a la
                asistencia de un abogado en el proceso civil que se iniciaría.
              </li>
              <li>
                <strong>Pérdida por daños: </strong>esta cobertura indemniza por los daños
                parciales o totales (declaración de pérdida total) que sufra el
                vehículo del asegurado.
              </li>
              <li>
                <strong>Pérdida parcial por hurto:</strong> indemniza por las partes robadas del
                carro asegurado.
              </li>
              <li>
                <strong>Pérdida total por hurto:</strong> indemniza cuando el carro asegurado
                desaparece permanentemente debido a un hurto.
              </li>
              <li>
                <strong>Asistencia en viajes o carretera:</strong> te protege cuando durante un
                viaje tu vehículo sufre un daño (distinto al de un accidente).
                Esta cobertura puede incluir un carro que te recoge a ti y tu
                familia para llevarlos al lugar de destino por eso, la compañía
                debe brindarte un número de teléfono o celular para que puedas
                solicitar asistencia las 24 horas, los 365 días del año.
              </li>
              <li>
                <strong>Vehículo de reemplazo: </strong>esta cobertura es importante si de tu
                vehículo depende, por ejemplo, tu desempeño laboral, puesto que
                contempla el préstamo de un carro de la aseguradora por el
                tiempo que dure la reparación del tuyo.
              </li>
              <li>
                <strong>Asistencia Domiciliaria:</strong> este cubrimiento tiene características
                parecidas al de asistencia en viajes o carretera. La diferencia
                es que la asistencia se hace dentro de la ciudad y cubre eventos
                como pinchadas, quedarse sin gasolina, dejar las llaves dentro
                del carro, etc.
              </li>
              
            </ul>
          </Container>
        </Jumbotron>
      </Layout>
    );
  }
}
