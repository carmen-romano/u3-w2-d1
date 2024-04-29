import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Badge, Col } from "react-bootstrap";
import "../../src/App.css";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    active: false,
    comments: [],
  };
  handleClick = () => {
    this.setState({
      active: this.state.active ? false : true,
    });
  };

  render() {
    const { book } = this.props;

    return (
      <Col key={book.asin}>
        <Card
          style={{ width: "12rem" }}
          className={`mb-3 text-center image-card ${
            this.state.active ? "active" : "inactive"
          }`}
        >
          <Card.Img
            src={book.img}
            className="book-image"
            onClick={this.handleClick}
          />
          <Card.Body>
            <Card.Title className="fs-6">{book.title}</Card.Title>
            <Badge bg="success">{book.price}€</Badge>
          </Card.Body>
          {this.state.active && <CommentArea IdBook={book.asin} />}
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
