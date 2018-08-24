
const path = require('path')
const express = require('express')
const layout = require('express-layout')
const parser = require('body-parser')
const validator = require('express-validator')

const routes = require('./routes')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const middlewares = [
  layout(),
  express.static(path.join(__dirname, 'public')),
  parser.urlencoded(),
  validator()
]
app.use(middlewares)

app.use('/', routes)

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

const port = process.env.PORT | 3000
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
})
