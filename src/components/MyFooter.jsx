import Card from "react-bootstrap/Card";
import "../../src/App.css";

let MyFooter = () => {
  return (
    <Card className="text-center">
      <Card.Header>EpiBooks</Card.Header>
      <Card.Body>
        <Card.Title>USEFUL LINKS</Card.Title>
        <Card.Link href="#link"> Home</Card.Link>
        <Card.Link href="#link"> About</Card.Link>
        <Card.Link href="#link"> Browse</Card.Link>
      </Card.Body>
      <Card.Footer className="text-muted">
        © 2024 Copyright: epibooks.com
      </Card.Footer>
    </Card>
  );
};

export default MyFooter;
