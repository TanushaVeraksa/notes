import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface NoteProps {
  text: string
}

function Note({text}: NoteProps) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
    <Form.Control 
        type="text" 
        placeholder="Input text" 
        value={text}
      />
      <Button variant="outline-info" className='mx-2'>Edit</Button>
      <Button variant="outline-danger">Delete</Button>
    </Card.Body>
  </Card>
  )
}

export default Note