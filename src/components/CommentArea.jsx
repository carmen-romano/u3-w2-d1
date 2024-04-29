import { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    const { IdBook } = this.props;
    if (IdBook) {
      this.fetchComments(IdBook);
    } else {
      console.error("L'ID del libro è undefined ");
    }
  }

  fetchComments = IdBook => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${IdBook}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZGNiNjdmMzA0NjAwMWFlNTlmNTIiLCJpYXQiOjE3MTQzOTAwNTYsImV4cCI6MTcxNTU5OTY1Nn0.t0_2opMcu30WDNatlEIKvK0Dm5Vx-CqakF5nDtqUCu0",
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("errore nella fetch");
        }
        return response.json();
      })
      .then(comment => {
        console.log("commenti:", comment);
        this.setState({ comments: comment });
        console.log(this.state);
      })

      .catch(error => {
        console.error("Error:", error);
      });
  };

  render() {
    const { comments } = this.state;

    return (
      <Container>
        <h4>Recensioni:</h4>
        {comments.map(comment => (
          <ListGroup key={comment._id}>
            <ListGroup.Item className="fw-bold fs-6">
              {comment.comment}
            </ListGroup.Item>
          </ListGroup>
        ))}
        <AddComment idBook={comments.elementId}></AddComment>
      </Container>
    );
  }
}
export default CommentArea;
