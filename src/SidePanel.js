import NoteSlot from './NoteSlot'

const SidePanel = ({notes, addNote, 
  editNote, removeNote, clearAll, currentId, setCurrentId}) => {
  return (
    <ul>
      {notes.map(note => <NoteSlot
        key={note.id}
        note={note}
        editNote={editNote}
        removeNote={removeNote} 
        currentId={currentId}
        setCurrentId={setCurrentId}
      />)}
      <button onClick={addNote}>Add New</button>
      <button onClick={clearAll}>Clear All</button>
    </ul>
  )
}

export default SidePanel