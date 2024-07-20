import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const SearchBar = ({ setSearchValue }) => {
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center mt-4 gap-4">
      <h2>Looking For Something Special?</h2>
      <Form>
        <Row>
          <Col xs="auto" className="text-center">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={handleChange}
            />
          </Col>
          <Col xs="auto" className="text-center">
            <Button type="submit">Search</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchBar;
