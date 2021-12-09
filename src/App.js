import { useState } from 'react'
import { useFromStorage, randomTitle } from './lib'
import SidePanel from './SidePanel'
import NoteArea from './NoteArea'

const App = () => {
  const [notes, setNotes] = useFromStorage('notes', [])
  const [currentId, setCurrentId] = useState(-1)

  function addNewNote() {
    setNotes([...notes, {
      id: Date.now(),
      title: randomTitle(),
      body: ''
    }])
  }

  function editNote(id, newNote) {
    setNotes(notes.map(note => 
      note.id === id ? newNote : note))
  }

  function editBody(id, newBody) {
    setNotes(notes.map(note => note.id === id 
      ? {...note, body: newBody} : note))
  }

  function removeNote(id) {
    setNotes(notes.filter(note => note.id !== id))
  }

  return (
    <div className="container">
      <header>
        <h1>Notes App!</h1>
      </header>

      <SidePanel 
        notes={notes}
        addNote={addNewNote} 
        editNote={editNote}
        removeNote={removeNote}
        clearAll={() => setNotes([])}

        currentId={currentId}
        setCurrentId={setCurrentId}
      />

      <NoteArea 
        notes={notes} 
        currentId={currentId}
        editBody={editBody}/>
    </div>
  )
}

export default App