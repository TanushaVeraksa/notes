import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function NewNote() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Button variant="outline-info" className='px-4'>Add</Button>
      <Card.Text>
       Add new note
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default NewNote