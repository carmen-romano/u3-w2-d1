import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Badge, Col, Container, Nav, Row } from "react-bootstrap";
import horror from "../data/books/horror.json";
import history from "../data/books/history.json";
import fantasy from "../data/books/fantasy.json";
import romance from "../data/books/romance.json";
import firstBook from "../data/books/firstBook.json";
import "../../src/App.css";

class AllTheBooks extends Component {
  state = {
    selectedBooks: firstBook,
  };

  render() {
    return (
      <Container>
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              className="link"
              onClick={() => this.setState({ selectedBooks: horror })}
            >
              Horror
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-2"
              className="link"
              onClick={() => this.setState({ selectedBooks: history })}
            >
              History
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-3"
              className="link"
              onClick={() => this.setState({ selectedBooks: fantasy })}
            >
              Fantasy
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-4"
              className="link"
              onClick={() => this.setState({ selectedBooks: romance })}
            >
              Romance
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Row>
          {this.state.selectedBooks.map((book) => (
            <Col key={book.asin}>
              <Card
                style={{ width: "17rem" }}
                className="mb-3 text-center image-card"
              >
                <Card.Img src={book.img} className="book-image" />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Badge bg="success">{book.price}€</Badge>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
