import React from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import '../styles/Home.css';

function Home() {
  return (
    <React.Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm={6} md={4} lg="3">
            <Card className='cards'>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Home;
