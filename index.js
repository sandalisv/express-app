const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World New2!</h1>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port new2 ${PORT}`)
})