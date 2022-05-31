const {Style} = require("../models/style");

exports.getAll = async function (req, res) {
    res.send(await Style.getAll())
}

exports.create = async function (req, res) {
    let newStyle = new Style(req.body.name, req.body.description)
    try {
        await newStyle.save()
    } catch (e) {
        res.send("Not created!")
        return
    }
    res.send("Success!")
}