const {Style} = require("../models/style");

exports.getAll = function (req, res) {
    res.send(Style.getAll())
}

exports.create = function (req, res) {
    let newStyle = new Style(req.body.name, req.body.description)
    try {
        newStyle.save()
    } catch (e) {
        res.send(e)
        return
    }
    res.send("Success!")
}