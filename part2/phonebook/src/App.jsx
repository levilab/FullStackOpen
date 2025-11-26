import { useState } from 'react'
import Filter from '../components/Filter'
import Header from '../components/Header'
import PersonForm from '../components/PersonForm'
import Persons from '../components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [filteredName, setFilteredName] = useState('')


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
    setPersons(persons.concat(newPerson))
    }

  const filteredPersons = persons.filter((person)=> person.name.toLowerCase().includes(filteredName.toLowerCase()))
  
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
      <Persons persons = {filteredPersons}/>
    </div>
  )
}

export default App