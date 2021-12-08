import { useFromStorage, randomTitle } from './lib'
import SidePanel from './SidePanel'

const App = () => {
  const [notes, setNotes] = useFromStorage('notes', [])

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
      />

      <textarea></textarea>
    </div>
  )
}

export default App