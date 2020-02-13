import React from 'react'
import './App.css'
import { Container, Row, Col, } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faMedium, } from '@fortawesome/free-brands-svg-icons'
import { faMobileAlt, faEnvelope, faWrench, } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <Container>
      <Row style={{height: '100vh'}}>
        <Col xs="auto" className="bg">
          <Row>
            <Col className="text-center">
              Hernán Massad
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <img src="https://picsum.photos/100" alt="Hernán Massad's headshot" className="circle" />
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Contacto</h5>
              <a style={s.contactA} href="mailto:hernan.massad@gmail.com"><FontAwesomeIcon icon={faEnvelope} style={s.icon} /> hernan.massad@gmail.com</a><br/>
              <a style={s.contactA} href="tel:+541132942176"><div><FontAwesomeIcon icon={faMobileAlt} style={s.icon} /> +54 11 3294-2176</div></a>
              <a style={s.contactA} href="https://www.linkedin.com/in/hmassad/"><div><FontAwesomeIcon icon={faLinkedin} style={s.icon} /> hmassad</div></a>
              <a style={s.contactA} href="https://github.com/hmassad"><div><FontAwesomeIcon icon={faGithub} style={s.icon} /> hmassad</div></a>
              <a style={s.contactA} href="https://medium.com/@hernan.massad"><div><FontAwesomeIcon icon={faMedium} style={s.icon} /> @hernan.massad</div></a>
            </Col>
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
          <h3>Experiencia</h3>
          <ul className="timeline">
            <li>
              <span className="header">Flame Factory, Fundador</span>
              <span className="float-right date">2019-PRESENTE</span>
              <p>Consultoría en desarrollo de software, desarrollo de software.</p>
              <ul>
                <li>IACON Smart Factory para <a href="http://iacon.com.ar">IACON</a>, empresa de ingeniería para procesos industriales<br />
                  Solución de IoT para toma de datos de manufactura en tiempo real.<br/>
                  <FontAwesomeIcon icon={faWrench} /> Java Spring Boot, Apache Kafka, React, Elasticsearch, React-Native, MySQL, Arduino, Raspberry</li>
                <li>Storyfire.com <a href="http://storyfire.com">Storyfire</a>, red social de <br />
                  Consultoría sobre tecnología de backend. Desafío: soportar la carga de usuarios (~100K diarios)<br/>
                </li>
                <li>Scrapper para <a href="http://repuestoshonda.com.ar">Sarcro Import</a>, importadora de autopartes<br />
                  Servicio de análisis de oferta (precios, plaza) de autopartes.
                  Extracción de precios de Mercadolibre, OLX, Facebook Marketplace e input manual.
                  Search Engine Optimization. Integrado stock con mercadolibre y mercadoshops.
                  Integración con factura electrónica.<br />
                  Tecnología: Java Spring Boot, React, Elasticsearch.<br />
                  Logros: duplicar el tráfico a la página web, reducir tráfico no relevante, casi triplicar la cantidad de ventas en mercadolibre</li>
                <li>Template de extensión de chrome para <a href="https://trysmarty.com">trysmarty.com</a>
                  Desarrollo de boilerplate de extensión de chrome. <a href="https://github.com/hmassad/chrome-extension-webpack-boilerplate">repositorio público</a>
                </li>
              </ul>
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
    </Container>
  )
}

export default App

const s = {
  contactA: {
    color: 'white'
  },
  icon: {
    width: '16px'
  }
}