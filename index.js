const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: true
}));

const port = 3000

const authorsRouter = require('./routers/authors-router')
const booksRouter = require('./routers/books-router')
const genresRouter = require('./routers/genres-router')
const stylesRouter = require('./routers/styles-router')
const indexRouter = require('./routers/index')

app.use('/author', authorsRouter)
app.use('/book', booksRouter)
app.use('/genre', genresRouter)
app.use('/style', stylesRouter)
app.use('/', indexRouter)

app.listen(port, () => {
    console.clear()
    console.log(`Example app listening on port ${port}`)
})
