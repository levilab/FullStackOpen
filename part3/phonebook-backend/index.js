const express = require("express")
const app = express()
const morgan = require ('morgan')
const cors = require('cors')


let persons = [
  { 
    id: 1,
    name: "Arto Hellas", 
    number: "040-123456"
  },
  { 
    id: 2,
    name: "Ada Lovelace", 
    number: "39-44-5323523"
  },
  { 
    id: 3,
    name: "Dan Abramov", 
    number: "12-43-234345"
  },
  { 
    id: 4,
    name: "Mary Poppendieck", 
    number: "39-23-6423122"
  }
]



app.use(express.json())
app.use(cors())
morgan.token('body', (request, response) => {
  return JSON.stringify(request.body)
})

app.get('/api/persons',(request, response) => {
    response.json(persons)
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

const generatedID = () => {
  const id = Math.floor(Math.random()*1000)
  return id
}

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

  const isAdded = persons.find(p => p.name === body.name)
  if (isAdded) {
    return response.status(404).json({
      error: "the name already exists in the phonebook"
    })
  }

  const person = {
      id: generatedID(),
      name: body.name, 
      number: body.number
  }

  persons = persons.concat(person)
  response.json(person)
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})