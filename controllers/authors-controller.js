const {Author} = require("../models/author");

//getAll — sends response with all authors
exports.getAll = async function (req, res) {
    res.send(await Author.getAll())
}

//create — creates new author using data provided in POST
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
