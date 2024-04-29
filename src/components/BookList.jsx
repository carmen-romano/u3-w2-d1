import { Component } from "react";
import SingleBook from "./SingleBook";
import "../../src/App.css";
import { Col, Container, Form, Row } from "react-bootstrap";

class BookList extends Component {
  state = {
    searchBook: "",
  };

  render() {
    const { books } = this.props;
    return (
      <div className="ct-books">
        <h3 className="fw-b mb-4 mt-4">Search for your favorite books.</h3>
        <Form>
          <Row>
            <Col xs="auto" className="searchContainer ">
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2 search"
                value={this.state.searchBook}
                onChange={e => this.setState({ searchBook: e.target.value })}
              />
            </Col>
          </Row>
        </Form>
        <Container>
          <Row className="justify-content-center">
            {books
              .filter(book =>
                book.title
                  .toLowerCase()
                  .includes(this.state.searchBook.toLowerCase())
              )
              .map(book => (
                <SingleBook key={book.asin} book={book} />
              ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default BookList;
