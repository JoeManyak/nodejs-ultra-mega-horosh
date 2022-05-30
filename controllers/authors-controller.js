const {Author} = require("../models/author");

exports.getAll = function (req, res) {
    res.send(Author.getAll())
}

exports.create = function (req, res) {
    let newAuthor = new Author(req.body.firstname, req.body.lastname)
    try {
        newAuthor.save()
    } catch (e) {
        res.send(e)
        return
    }
    res.send("Success!")
}
