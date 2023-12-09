import { makeAutoObservable } from "mobx";

interface Note {
  id: number;
  text: string;
}

const addNote = (notes: Note[], text: string): Note[] => [
  ...notes,
  {
    id: Math.max(0, Math.max(...notes.map(({ id }) => id))) + 1,
    text,
  },
];

const removeNote = (notes: Note[], id: number): Note[] =>
  notes.filter((note) => note.id !== id);

class NoteStore {
  notes: Note[] = [];
  newNote: string = "";
  constructor() {
    makeAutoObservable(this);
  }

  addNote() {
    this.notes = addNote(this.notes, this.newNote);
    this.newNote = "";
  }

  removeNote(id: number) {
    this.notes = removeNote(this.notes, id);
  }
}

const noteStore = new NoteStore();
export default noteStore;
