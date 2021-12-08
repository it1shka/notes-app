import { useState } from 'react'

const NoteSlot = ({note, editNote, removeNote}) => {
  const [editing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(note.title)

  function toggle(e) {
    e.preventDefault()
    if(editing)
      editNote(note.id, {
        ...note,
        title: newTitle
      })
    setEditing(!editing)
  }

  function deleteThis() {
    removeNote(note.id)
  }

  return (
    <li onContextMenu={toggle}>
    {editing 
    ? (<>
      <input
        value={newTitle}
        onChange={e => setNewTitle(e.target.value)}
        />
      <button 
        className="small-btn"
        onClick={deleteThis}
      >Delete</button>
      </>) 
    : note.title}
    </li>
  )
}

export default NoteSlot