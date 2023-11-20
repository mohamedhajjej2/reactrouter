import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
function MovieCard({movie}) {
  return (
    <div className='cardd'> 
    <Link  style={{textDecoration:"none", color:"white"}} to={`/trailer/${movie.id}`}>
    

     <Card style={{ width: '18rem', margin:"30px", maxWidth:"500px",maxHeight:"600px"  }}>
    <Card.Img variant="top" src={movie.posterurl}  style={{ width: "18rem" , height:"30rem"}} />
    <Card.Body>
      <Card.Title>{movie.name}</Card.Title>
      <Card.Text>
       <p>{movie.description}</p>
      </Card.Text>
      <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700" edit={false} value={movie.rating}
  />,
      {/* <Button variant="primary">Trailer</Button> */}
    </Card.Body>
  </Card>
  </Link>
  </div>

  )
}

export default MovieCard