const {Genre} = require("../models/genre");

exports.getAll = function (req, res) {
    res.send(Genre.getAll())
}

exports.create = function (req, res) {
    let newGenre = new Genre(req.body.name, req.body.description)
    try {
        newGenre.save()
    } catch (e) {
        res.send(e)
        return
    }
    res.send("Success!")
}