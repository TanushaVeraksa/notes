import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { observer } from 'mobx-react-lite';

import noteStore from '../store/NoteStore';

function NewNote() {
  return (
    <Card style={{ width: '18rem' }} className="text-center">
    <Card.Body>
      <Card.Subtitle>Add new note</Card.Subtitle>
      <Form.Control 
        type="text" 
        placeholder="Input text" 
        value={noteStore.newNote}
        onChange={(e)=> noteStore.newNote = e.target.value}
      />
      <Button variant="primary" className='w-50'
        onClick={()=> noteStore.addNote()}
      >Add Note
        </Button>
    </Card.Body>
  </Card>
  )
}

export default observer(NewNote);