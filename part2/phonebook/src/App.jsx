import { useState, useEffect } from 'react'
import Filter from '../src/components/Filter'
import Header from '../src/components/Header'
import PersonForm from '../src/components/PersonForm'
import Persons from '../src/components/Persons'
import personService from './services/note.js'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [filteredName, setFilteredName] = useState('')

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  console.log(persons.length)
  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    const isAdded = persons.some((person) => person.name.toLowerCase() === newPerson.name.toLowerCase())
    if (isAdded){
        alert(`${newName} is already added to the phonebook`)
        return
    }

    personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNumber('')
      })
    }

  const filteredPersons = persons.filter((person)=> person.name.toLowerCase().includes(filteredName.toLowerCase()))

  const deletePerson = (person) => {
    if (window.confirm(`delete ${person.name}`)){
      personService
        .remove(person.id)
        .then(deletedPerson => {
          setPersons(persons.filter(person => person.id != deletedPerson.id))
        })
    }
      
  }

  const handleInputPerson = (event) => {
    setNewName(event.target.value)
  }

  const handleInputPhone = (event) => {
    setNumber(event.target.value)
  }

  const handleSearchPerson = (event) => {
    setFilteredName(event.target.value)
  }

  return (
    <div>
      <Header name = 'Phonebook'/>
      <Filter searchEvent={handleSearchPerson}/>
      <h2>Add a new</h2> 
      <PersonForm addPerson = {addPerson} newName = {newName} handleInputPerson={handleInputPerson} handleInputPhone = {handleInputPhone}/>
      <h2>Numbers</h2>
      <div> {filteredPersons.map(person=> <Persons person={person} deletePerson={()=>deletePerson(person)}/>)}
      </div>
    </div>
  )
}

export default App