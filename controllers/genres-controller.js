const {Genre} = require("../models/genre");

exports.getAll = async function (req, res) {
    res.send(await Genre.getAll())
}

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