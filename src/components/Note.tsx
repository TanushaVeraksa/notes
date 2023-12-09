import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import noteStore from "../store/NoteStore";
import { observer } from "mobx-react-lite";

interface NoteProps {
  id: number;
  text: string;
}

function Note({id, text}: NoteProps) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
    <Form.Control 
        type="text" 
        placeholder="Input text" 
        value={text}
      />
      <Button variant="outline-info" className='mx-2'>Edit</Button>
      <Button 
        variant="outline-danger"
        onClick={()=> noteStore.removeNote(id)}
        >Delete
        </Button>
    </Card.Body>
  </Card>
  )
}

export default observer(Note)