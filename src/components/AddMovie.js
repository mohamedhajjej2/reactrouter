import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';
function AddMovie({movies, setmovies}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newmovie, setnewmovie] = useState({
    name:"",
    posterurl:"",
    description:"",
    rating:"",

  })
  const add=()=>setmovies([...movies, newmovie])
  return (
    <>
    <div className='addbutton'>
    <Button  variant="primary" onClick={handleShow}>
    Add movie +

    </Button>
    </div>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie name</Form.Label>
        <Form.Control type="text" placeholder="Enter movie name" onChange={(e)=>setnewmovie({...newmovie, name:e.target.value})}/>

        <Form.Text className="text-muted"> 
       
          Movie name

        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie image</Form.Label>
        <Form.Control type="text" placeholder="Enter movie image" onChange={(e)=>setnewmovie({...newmovie, posterurl:e.target.value})} />
        <Form.Text className="text-muted">
       Movie imaga
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie description</Form.Label>
        <Form.Control type="text" placeholder="Enter movie description" onChange={(e)=>setnewmovie({...newmovie, description:e.target.value})} />
        <Form.Text className="text-muted">
         Movie description
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie rating</Form.Label>
        <Form.Control type="text" placeholder="Enter movie rating" onChange={(e)=>setnewmovie({...newmovie, target:e.target.value})}/>
        <Form.Text className="text-muted">
         Movie rating
        </Form.Text>
      </Form.Group>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => {add(); 
          handleClose()
          }}>
          Add
        </Button>
        <Form/>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default AddMovie