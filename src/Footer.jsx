import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div className='d-flex justify-content-center flex-wrap bg-dark text-white mt-4'>
      <Container className='mt-5'>
        <Row>
            <Col md={'3'}>
            <p>Home</p>
            <p>About</p>
            <p>Email</p>
            <p>press</p>
            </Col>
            <Col md={'3'}>
            <p>Myntra</p>
            <p>Shopz</p>
            </Col>
            <Col md={'3'}>
            <p>payment</p>
            <p>calculation</p>
            </Col>
            <Col md={'3'}>
            <p>Terms and service</p>
            <p>Security</p>
            <p>privacy</p>
            <p>Site</p>

            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
