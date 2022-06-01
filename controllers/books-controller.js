const {Book} = require("../models/book");

//getAll — sends response with all books
exports.getAll = async function (req, res) {
    res.send(await Book.getAll())
}

//create — creates new book using data provided in POST
exports.create = async function (req, res) {
    let newBook = new Book(req.body.name, req.body.description, req.body.author, req.body.genre, req.body.style, req.body.pages)
    try {
        await newBook.save()
    } catch (e) {
        console.log(e)
        res.send("Not created!")
        return
    }
    res.send("Success!")
}

//delete — deletes book using id provided in POST
exports.delete = async function (req, res) {
    if ((await Book.deleteByID(req.body.id)).affectedRows){
        res.send("Deleted!")
        return
    }
    res.send("No items to delete!")
}

//searchBuName — search book by name provided in route
exports.searchByName = async function (req, res) {
    res.send(await Book.searchByName(req.params.name))
}
