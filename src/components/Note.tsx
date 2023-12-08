import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Note() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="outline-info" className='mx-2'>Edit</Button>
      <Button variant="outline-danger">Delete</Button>
    </Card.Body>
  </Card>
  )
}

export default Note