import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import noteStore from "../store/NoteStore";
import { observer } from "mobx-react-lite";
import { useState } from 'react';

interface NoteProps {
  id: number;
  text: string;
}

function Note({id, text}: NoteProps) {
  const [value, setValue] = useState<string>(text)
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
    <Form.Control 
        type="text" 
        placeholder="Input text" 
        value={value}
        onChange={(e)=> setValue(e.target.value)}
      />
      <Button 
        variant="outline-info" 
        className='mx-2'
        onClick={()=> noteStore.editNote(id, value)}
        >Edit
      </Button>
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