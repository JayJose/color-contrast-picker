import { useRef, useState } from "react";
import { Form, Stack, Row, Col, Button } from "react-bootstrap";
import getData from "../lib/getData";
import postData from "../lib/postData";

export default function MyForm({ setData }) {
  const colorsRef = useRef();

  const url = "http://localhost:8000/api/v0/users/";

  async function handleSubmit(e) {
    e.preventDefault();
    return null;
  }
  //     e.preventDefault();
  //     await postData(url,
  //       colorsRef.current.value,
  //       setData
  //     }).then((data) => {
  //       if (data) {
  //         console.log(data);
  //         getData(url, setData);
  //       }
  //     });
  //     e.target.reset();
  //   }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="formBasicColors">
              <Form.Label>Colors</Form.Label>
              <Form.Control
                required
                type="text"
                ref={colorsRef}
                placeholder="Enter some colors."
              />
            </Form.Group>
          </Col>
        </Row>
        <Stack direction="horizontal" gap={2} className={"justify-content-end"}>
          <Button type="submit" variant="primary">
            Search
          </Button>
        </Stack>
      </Stack>
    </Form>
  );
}
