import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import ReactStars from "react-rating-stars-component";
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom';
function Navbarr({settext, setrate}) {
  const [show, setshow] = useState(false)


  return (
    <div className='sticky'>
     <h1 className='title'>Movie Database</h1>
   
     <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => settext(e.target.value)}
            />
            <Button variant="outline-success" className='buttonn'>Search</Button>
          </Form>
          <h3 className='title2'>Sharing a few of our favorite movies</h3>
          <div className='menu2'>
          
 <button className='btn2' onClick={()=>setshow(!show)}>Click here show menu</button><div className='btn'>
      </div>
      {show?<div className='menu'>
     <ul>
     <a href='#'> <li><Link to="/" style={{textDecoration:"none", color:"black"}}>Home</Link></li></a>
      <a href='#'><li><Link to="/about" style={{textDecoration:"none", color:"black"}} >About</Link></li></a>
      <a href='#'><li> <Link to="/contact" style={{textDecoration:"none", color:"black"}}>Contact</Link></li></a>
      
     </ul>
     </div>:null}
     </div>
     <div className='startt'>
     <ReactStars 
    count={5}
    size={24}
    activeColor="#ffd700" 
    onChange={(newRating) => setrate(newRating)}
  />,
  </div>
  
    </div>
  )
}

export default Navbarr