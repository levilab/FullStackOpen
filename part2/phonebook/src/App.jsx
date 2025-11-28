import { useState, useEffect } from 'react'
import Filter from '../components/Filter'
import Header from '../components/Header'
import PersonForm from '../components/PersonForm'
import Persons from '../components/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [filteredName, setFilteredName] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        const persons = response.data
        setPersons(persons)
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