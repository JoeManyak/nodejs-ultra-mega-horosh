const {Genre} = require("../models/genre");

//getAll — sends response with all genres
exports.getAll = async function (req, res) {
    res.send(await Genre.getAll())
}

//create — creates new genre using data provided in POST
exports.create = async function (req, res) {
    let newGenre = new Genre(req.body.name, req.body.description)
    try {
        await newGenre.save()
    } catch (e) {
        res.send("Not created!")
        return
    }
    res.send("Success!")
}