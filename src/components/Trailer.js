import React from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Trailer({movies}) {
    const params = useParams();
    const movie = movies.filter((el)=>el.id==params.id)[0];
    console.log(movie);
  return (
    <div>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterurl} />
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>
{movie.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Trailer