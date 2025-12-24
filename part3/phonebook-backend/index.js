const express = require("express")
const app = express()
const morgan = require ('morgan')
const cors = require('cors')
require('dotenv').config()
const Person = require('./models/person')


app.use(express.static('dist'))
app.use(express.json())


morgan.token('body', (request, response) => {
  return JSON.stringify(request.body)
})

app.get('/api/persons',(request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
  
})

app.get('/info', (request, response) => {
    response.send(`<p> Phonebook has info for ${persons.length} people</p>
                    <p> ${new Date()} </p>`)
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const person = persons.find( p => p.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  persons = persons.filter(p => p.id !== id)

  response.status(204).end()
})

// const generatedID = () => {
//   const id = Math.floor(Math.random()*1000)
//   return id
// }

const customFormat = ':method :url :status :res[content-length] - :response-time ms :body'

app.post('/api/persons', morgan(customFormat), (request, response) => {
  const body = request.body

  if (!body.name) {
    return response.status(404).json({
      error: 'name missing'
    })
  }

  if (!body.number) {
    return response.status(404).json({
      error: 'number missing'
    })
  }

  // const isAdded = persons.find(p => p.name === body.name)
  // if (isAdded) {
  //   return response.status(404).json({
  //     error: "the name already exists in the phonebook"
  //   })
  // }

  const person = new Person({
      name: body.name, 
      number: body.number
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
  
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})