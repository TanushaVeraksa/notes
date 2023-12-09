import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

interface NoteProps {
  text: string
}

function Note({text}: NoteProps) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Text>
        {text}
      </Card.Text>
      <Button variant="outline-info" className='mx-2'>Edit</Button>
      <Button variant="outline-danger">Delete</Button>
    </Card.Body>
  </Card>
  )
}

export default Note