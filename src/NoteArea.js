import { useEffect, useState } from 'react'

const NoteArea = ({notes, currentId, editBody}) => {
  const [body, setBody] = useState(undefined)

  useEffect(() => {
    const found = notes.find(n => n.id === currentId)
    setBody(found?.body)
  }, [currentId])

  function handleCtrlS(e) {
    let charCode = String.fromCharCode(e.which).toLowerCase();
    if((e.ctrlKey || e.metaKey) && charCode === 's') {
      e.preventDefault()
      editBody(currentId, body)
    }
  }

  return <textarea 
    value={body ?? 'No note.'} 
    disabled={body === undefined}
    onChange={e => setBody(e.target.value)}
    onKeyDown={handleCtrlS}></textarea>
}

export default NoteArea