const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8000

var users = require('./users.json')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    return res.status(200).send('Hello Node.js')
})

app.get('/user', (req, res) => {
    return res.status(200).json(users)
})

app.post('/addUser', (req, res) => {
    let i = 1
    while (users[i] != undefined) i++;
    let newUser = {
        "name" : req.body.name,
        "password" : req.body.password,
        "profession" : req.body.profession,
        "id": i
    }
    users[i] = newUser
    return res.status(200).send('Created new user!')
})


app.listen(port, () => {
    console.log('Starting Node.js on port ' + port)
})