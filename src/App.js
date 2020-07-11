import React, {useState, useEffect} from 'react';
import {Form, Row, Col, InputGroup, Button} from 'react-bootstrap'
import BooksViewer from "./components/booksViewer";
import axios from 'axios'


function App() {
  const url = 'http://localhost:4000/books'
  const [newBook, setNewBook] = useState({title: ''})
  const [books, setBooks] = useState([])


  useEffect(() => {
    getBooks()
  }, [])

  const handleChange = (e) => {
    setNewBook({
      title: e.target.value
    })
  }

  const deleteHandle = (id) => {
    axios.delete(`${url}/${id}`)
      .then(res => {
        getBooks()
      }).catch(err => console.log(err))

  }

  const submitHandle = (e) => {
    e.preventDefault()
    axios.post(url, newBook)
      .then(res => {
        getBooks()
      })
      .catch(err => console.error(err))
  }

  const getBooks = () => {
    axios.get(url)
      .then(res => {
        setBooks(res.data.books)
      })
      .catch(err => console.error(err))
  }

  return (
    <>
      <Row className="p-3">
        <Col sm={6} md={4} className="mx-auto">
          <Form onSubmit={submitHandle}>
            <Form.Label>Título del Libro</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Título..."
                onChange={handleChange}
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" type="submit">Agregar</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Col>
      </Row>
      <BooksViewer books={books} deleteHandle={deleteHandle}/>

    </>

  );

}


export default App;
