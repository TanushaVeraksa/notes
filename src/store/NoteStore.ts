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

const editNote = (notes: Note[], id: number, text: string): Note[] =>
  notes.map((note) => ({
    ...note,
    text: note.id === id ? text : note.text,
  }));

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

  editNote(id: number, text: string) {
    this.notes = editNote(this.notes, id, text);
  }
  getNotes() {
    return this.notes;
  }
}

const noteStore = new NoteStore();
export default noteStore;
