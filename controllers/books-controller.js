const {Book} = require("../models/book");

exports.getAll = function (req, res) {
    res.send(Book.getAll())
}

exports.create = function (req, res) {
    let newBook = new Book(req.body.name, req.body.description, req.body.author, req.body.genre, req.body.style, req.body.pages)
    try {
        newBook.save()
    } catch (e) {
        res.send(e)
        return
    }
    res.send("Success!")
}

exports.delete = function (req, res) {
    if (Book.deleteByID(req.body.id)){
        res.send("Deleted!")
        return
    }
    res.send("No items to delete!")
}

exports.searchByName = function (req, res) {
    res.send(Book.searchByName(req.params.name))
}

