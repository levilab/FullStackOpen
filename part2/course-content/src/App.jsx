import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Note from './components/Note'
import noteService from './services/note'
import './index.css'
import Notification from './components/Notifications'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('some error happened...')

  useEffect(()=>{
    console.log(noteService.getAll())
    noteService
      .getAll()
      .then(initialNotes =>{
        setNotes(initialNotes)
      })
  },[])
  

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5
    }
    
    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))  
        setNewNote('')
      })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll 
        ? notes 
        : notes.filter(note => note.important)

  const toggleImportanceOf = (id) => {
    const note = notes.find(note => note.id === id)
    const changednote = {...note, important: !note.important}

    noteService
      .update(id, changednote)
      .then(returnedNote=>{
      setNotes(notes.map(note => note.id === id ? returnedNote : note))
    })
      .catch(error => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })

  }

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage}/>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value = {newNote}  onChange={handleNoteChange}/>
        <button type ="submit">save</button>
      </form>
      <Footer/>
    </div>
  )
}

export default App