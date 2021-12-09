import { useState } from 'react'

const NoteSlot = ({note, editNote, removeNote,
  currentId, setCurrentId}) => {
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

  function deleteThis(e) {
    e.stopPropagation()
    if(currentId === note.id)
      setCurrentId(null)
    removeNote(note.id)
  }

  return (
    <li className={currentId === note.id ? "featured" : ""}
      onContextMenu={toggle} 
      onClick={() => setCurrentId(note.id)}>
    {editing 
    ? (<>
      <input onClick={e => e.preventDefault()}
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