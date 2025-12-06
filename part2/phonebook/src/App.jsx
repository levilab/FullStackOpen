import { useState, useEffect } from 'react'
import Filter from '../src/components/Filter'
import Header from '../src/components/Header'
import PersonForm from '../src/components/PersonForm'
import Persons from '../src/components/Persons'
import personService from './services/person.js'
import SuccessfulMessage from './components/NotificationsSuccess.jsx'
import './index.css'
import FailedMessage from './components/NotificationsFailed.jsx'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newNumber, setNumber] = useState('')
  const [filteredName, setFilteredName] = useState('')
  const [newName, setNewName] = useState('')
  const [message, setMessage] = useState(null)
  const [error, setErrorMessage] = useState(null)

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    /*
    two bugs:
    1) adding same name, two tabs, react saved both to server => must fetch the data from server when checking duplication
    */
    personService
      .getAll()
      .then(currentPerons => {
            const isAdded = currentPerons.find((person) => person.name.toLowerCase() === newName.toLowerCase())
            if (isAdded){
              if (window.confirm(`${newPerson.name} is already added to the phonebook, replace the old number with a new one?`)){
                const duplicatedPerson = persons.find(person => person.name === newPerson.name)
                const updatedPerson = {...duplicatedPerson, number: newPerson.number}      
                personService
                  .update(updatedPerson.id, updatedPerson)
                  .then(returnedPerson => {
                    setPersons(persons.map(person => person.id === updatedPerson.id ? returnedPerson : person))
                  })
                  .catch(error => {
                    setErrorMessage(`Information of ${newPerson.name} has already been removed from server`)
                    setTimeout(
                      ()=>setErrorMessage(null)
                      ,5000)
                  })
              }
            } else  {
                personService
                  .create(newPerson)
                  .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setMessage(`Added ${returnedPerson.name}`)
                    setTimeout(() =>{
                      setMessage(null)
                    }, 5000)
                    setNewName('')
                    setNumber('')
                  })
                }
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
      <SuccessfulMessage message={message}/>
      <FailedMessage message={error} />
      <Filter searchEvent={handleSearchPerson}/>
      <h2>Add a new</h2> 
      <PersonForm addPerson = {addPerson} handleInputPerson={handleInputPerson} handleInputPhone = {handleInputPhone} newName = {newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
      <div> 
        {filteredPersons.map(person=> <Persons person={person} deletePerson={()=>deletePerson(person)}/>)}
      </div>
    </div>
  )
}

export default App