import Note from "./Note";
import noteStore from "../store/NoteStore";
import { observer } from "mobx-react-lite";


function NoteListItems() {
  return (
   <>
    {noteStore.notes.map((note: {id: number; text: string}) => 
        <Note key={note.id} id={note.id} text={note.text}/>
    )}
   </>
  )
}

const NoteItemsObserver = observer(NoteListItems);

function NoteItems() {
  return (
    <>
      <NoteItemsObserver/>
    </>
  )
}

export default NoteItems