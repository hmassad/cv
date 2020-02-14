import React from 'react'
import './App.css'
import { Container, Row, Col, Image, } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faMedium, } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope, faWrench, faBullseye, faTrophy, } from '@fortawesome/free-solid-svg-icons'
import picture from './150x150.jpg'

export default () => {
  return (
    <Container fluid style={s.container}>
      <Row style={{height: '100vh'}}>
        <Col>
          <Row style={{...s.header, display: "flex", flexDirection: "row", alignItems: "center"}}>
            <Col xs="auto" style={{padding: -15}}>
              <Image src={picture} alt="Hernán Massad" roundedCircle style={{height: 125, width: 125}} />
            </Col>
            <Col>
              <div style={{marginTop: -12.5}}>
                <div style={{textTransform: "uppercase", fontSize: 40, lineHeight: "40px"}}>Hernán <span style={s.textAccent}>Massad 1134px</span></div>
                <div style={{textTransform: "uppercase", fontSize: 30, lineHeight: "30px"}}>Ingeniería <span style={s.textAccent}>en Software</span></div>
              </div>
            </Col>
            <Col xs="auto">
              <a style={s.contactA} href="tel:+541132942176"><div><FontAwesomeIcon icon={faPhone} style={s.icon} /> +54 11 3294-2176</div></a>
              <a style={s.contactA} href="mailto:hernan.massad@gmail.com"><FontAwesomeIcon icon={faEnvelope} style={s.icon} /> hernan.massad@gmail.com</a><br/>
              <a style={s.contactA} href="https://www.linkedin.com/in/hmassad/"><div><FontAwesomeIcon icon={faLinkedin} style={s.icon} /> hmassad</div></a>
              {/* <a style={s.contactA} href="https://github.com/hmassad"><div><FontAwesomeIcon icon={faGithub} style={s.icon} /> hmassad</div></a>
              <a style={s.contactA} href="https://medium.com/@hernan.massad"><div><FontAwesomeIcon icon={faMedium} style={s.icon} /> @hernan.massad</div></a> */}
            </Col>
          </Row>
          <Row>
            <Col xs="auto" style={s.sidebar}>
              <Row>
              </Row>
              <Row>
                <Col>
                  <h5>Conocimientos</h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>Intereses</h5>
                  <ul>
                    <li>Historia del arte</li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col>
              <h4>Experiencia</h4>
              <ul className="timeline">
                <li>
                  <span className="header">Flame Factory, Dueño</span>
                  <span className="float-right date">2019-PRESENTE</span>
                  <p>Consultoría en desarrollo de software, desarrollo de software.</p>
                  <div className="">
                    <div style={s.project}>
                      <div style={s.projectHeader}>IACON Smart Factory para <a href="http://iacon.com.ar">IACON</a>, empresa de ingeniería para procesos industriales</div>
                      Solución de IoT para toma de datos de manufactura en tiempo real.<br/>
                      <FontAwesomeIcon icon={faBullseye} /> Salida a producción Marzo 2020<br/>
                      <FontAwesomeIcon icon={faWrench} /> Java Spring Boot, Apache Kafka, React, Elasticsearch, React-Native, MySQL, Arduino, Raspberry.
                    </div>
                    <div style={s.project}>
                      <div style={s.projectHeader}>Storyfire.com <a href="http://storyfire.com">Storyfire</a>, red social de contenido de usuarios de USA</div>
                      Consultoría sobre tecnología de backend.<br />
                      <FontAwesomeIcon icon={faBullseye} /> Soportar la creciente carga de usuarios (1M diarios, con aumento de 10% mensual) sin pérdida de funcionalidad.<br/>
                      <FontAwesomeIcon icon={faBullseye} /> Implementar cobro, gamificación y pay-per-view de contenido.<br/>
                    </div>
                    <div style={s.project}>
                      <div style={s.projectHeader}>Scrapper para <a href="http://repuestoshonda.com.ar">Sarcro Import</a>, importadora de autopartes</div>
                      Servicio de análisis de oferta (precios, plaza) de autopartes.
                      Extracción de precios de Mercadolibre, OLX, Facebook Marketplace e input manual.
                      Search Engine Optimization. Integrado stock con mercadolibre y mercadoshops.
                      Integración con factura electrónica.<br />
                      <FontAwesomeIcon icon={faBullseye} /> Java Spring Boot, React, Elasticsearch.<br />
                      <FontAwesomeIcon icon={faTrophy} /> Duplicado el tráfico a la página web, reducido tráfico no relevante, triplicada la cantidad de ventas en mercadolibre
                    </div>
                    <div style={s.project}>
                      <div style={s.projectHeader}>Template de extensión de chrome para <a href="https://trysmarty.com">trysmarty.com</a></div>
                      <FontAwesomeIcon icon={faBullseye} /> Desarrollo de boilerplate de extensión de chrome. <a href="https://github.com/hmassad/chrome-extension-webpack-boilerplate">Repositorio público</a>
                    </div>
                  </div>
                </li>
                <li>
                  <span className="header">Mitrol, CTO</span>
                  <span className="float-right date">2006-2019</span>
                  <p>Empresa multinacional de tecnología especializada en soluciones para centros de contacto.</p>
                  <p>Desafíos y Logros</p>
                </li>
                <li>
                  <span className="header">Ustatic, Investigador en Electrónica</span>
                  <span className="float-right date">2004-2005</span>
                  <p>
                      Investigación en el campo de la electrónica para patentes de invención de la empresa.
                      Investigación y desarrollo en el campo de la electrónica para aplicaciones específicas de producción masiva y prototipado.
                      Logros: venta de patente de iluminación por led a OSRAM que se utilizó en alumbrado público</p>
                </li>
                <li>
                  <span className="header">Mitrol, Soporte técnico de locutorios y telecentros</span>
                  <span className="float-right date">2003-2004</span>
                  <p>Empresa multinacional de tecnología especializada en soluciones para centros de contacto.</p>
                  <p>Desafíos y Logros</p>
                </li>
                <li>
                  <span className="header">INTI (CITEI), Pasantía de Diseñador de circuitos electrónicos</span>
                  <span className="float-right date">2003-2003</span>
                </li>
              </ul>
            </Col>
          </Row>
          <Row style={s.footer}>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

const s = {
  container: {
    fontFamily: 'Open Sans'
  },
  header: {
    padding: "30px 15px",
    backgroundColor: "#3A3D41",
    color: "white",
    fontFamily: 'Open Sans'
  },
  footer: {
    padding: 20,
    backgroundColor: "#3A3D41",
  },
  sidebar: {
    paddingLeft: 30,
    width: 300,
    backgroundColor: "#E2E0Df",
  },
  textAccent: {
    color: '#4AA4E1'
  },
  contactA: {
    color: 'white'
  },
  icon: {
    width: '16px'
  },
  project: {
    marginBottom: 15,
  },
  projectHeader: {
    backgroundColor: "#F0F0F0"
  }
}