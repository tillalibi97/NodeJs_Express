const express = require('express')
const app = express()
const expressHandlebars = require('express-handlebars')
const fortune = require('./lib/fortune')
const handlers = require('./lib/handlers')

// Настройка механизма представлений Handlebars.
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

app.get('/', handlers.home)

app.get('/about', handlers.about)

// Пользовательская страница 404
app.use(handlers.notFound)

// Пользовательская страница 500
app.use(handlers.serverError)

app.listen(port, () => console.log(
    `Express запущен на http://localhost:${port}; ` +
    `нажмите Ctrl+C для завершения.` ))