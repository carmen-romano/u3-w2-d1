import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import "../../src/App.css";

let Welcome = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="secondary">
        <Alert.Heading className="text-center">
          Welcome to EpiBooks!
        </Alert.Heading>
        <p className="text-center">
          In this website, you can find the best books of the moment! <br />
          Check out the new releases!
        </p>
        <hr />
        <div className="d-flex justify-content-center">
          <Button onClick={() => setShow(false)} variant="outline-secondary">
            Close me
          </Button>
        </div>
      </Alert>
    </>
  );
};

export default Welcome;
