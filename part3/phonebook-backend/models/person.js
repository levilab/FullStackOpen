const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, {family: 4})
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch(error => {
        console.log('error connecting to MongoDB', error.message)
    })

const personSchema = new mongoose.Schema({
    name: {
    type: String,
    minLength: 3,
    required: true
    },
    number: {
    type: String,
    validate: {
        validator: function (v) {
            const parts = v.split('-')
            if (parts.length !== 2) return false
            
            const [first, second] = parts
            if (v.length < 8) return false
            if ((first.length !==2) || (first.length !== 3)) return false
            if (!Number.isInteger(Number(first))) return false
            if (!Number.isInteger(Number(second))) return false

            return false
        },
        message: props => `${props.value} is not a valid phone number` 
    }
    }
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Person', personSchema)