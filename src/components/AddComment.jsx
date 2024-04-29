import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class AddComment extends Component {
  state = {
    commentUser: {
      comment: "",
      rate: "",
      elementId: "",
    },
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      commentUser: {
        ...prevState.commentUser,
        [name]: value,
        elementId: this.props.idBook,
      },
    }));
  };

  commentFetch = (e, idBook) => {
    e.preventDefault();
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${idBook}`, {
      method: "POST",
      body: JSON.stringify(this.state.commentUser),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZGNiNjdmMzA0NjAwMWFlNTlmNTIiLCJpYXQiOjE3MTQzOTAwNTYsImV4cCI6MTcxNTU5OTY1Nn0.t0_2opMcu30WDNatlEIKvK0Dm5Vx-CqakF5nDtqUCu0",
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Errore durante la chiamata POST");
        }
        return response.json();
      })
      .then(data => {
        console.log("Chiamata POST riuscita:", data);
      })
      .catch(error => {
        console.error("Errore:", error);
      });
  };

  render() {
    return (
      <Form onSubmit={this.commentFetch}>
        <Form.Group className="mb-3">
          <Form.Label>Lascia un commento:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Review"
            name="comment"
            value={this.state.commentUser.comment}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Rate</Form.Label>
          <Form.Control
            type="number"
            placeholder="Rate"
            name="rate"
            value={this.state.commentUser.rate}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    );
  }
}

export default AddComment;
