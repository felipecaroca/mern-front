import {Row, Col, Card, Button} from "react-bootstrap";
import React from "react";

const BooksViewer = ({books, deleteHandle}) => {
  return (
    <>
      <Row className="p-5">
        {books.map(book=>(
          <Col sm={4} md={2} className="m-1" key={book._id}>
            <Card >
              <Card.Header className="text-right">
                <Button variant="danger"
                        onClick={()=> deleteHandle(book._id)}
                        className="btn-sm" >X</Button>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  {book.title}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}
export default BooksViewer