const {Author} = require("../models/author");

exports.getAll = async function (req, res) {
    res.send(await Author.getAll())
}

exports.create = async function (req, res) {
    let newAuthor = new Author(req.body.firstname, req.body.lastname)
    try {
        await newAuthor.save()
    } catch (e) {
        res.send("Not created!")
        return
    }
    res.send("Success!")
}
