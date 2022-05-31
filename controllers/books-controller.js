const {Book} = require("../models/book");

exports.getAll = async function (req, res) {
    res.send(await Book.getAll())
}

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

exports.delete = async function (req, res) {
    if ((await Book.deleteByID(req.body.id)).affectedRows){
        res.send("Deleted!")
        return
    }
    res.send("No items to delete!")
}

exports.searchByName = async function (req, res) {
    res.send(await Book.searchByName(req.params.name))
}

