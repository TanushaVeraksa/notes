import {makeAutoObservable} from 'mobx'

export interface Note {
    id: number;
    text: string
}

export const addNote = (notes: Note[], text: string) : Note[] => [
    ...notes,
    {
        id: Math.max(0, Math.max(...notes.map(({id}) => id))) + 1,
        text
    }
]

class NoteStore {
    notes: Note[] = [];
    newNote: string = "";
    constructor() {
        makeAutoObservable(this);
    }

    addNote() {
        this.notes = addNote(this.notes, this.newNote)
        this.newNote = "";
    }
}

const noteStore = new NoteStore();
export default noteStore;