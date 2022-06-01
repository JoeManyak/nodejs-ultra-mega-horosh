const req = require("../database/database");

const tableName = 'styles'
class Style {
    constructor(name, description, id) {
        this.name = name;
        this.description = description;
        this.id = id;
    }

    //save — insert object in database
    async save() {
        await req.query('INSERT INTO ' + tableName +
            ' (name, description) VALUES (?,?)',
            [this.name, this.description])
    }

    //getAll — return all object of this class from database
    static async getAll() {
        return await req.query('SELECT * FROM ' + tableName)
    }

}


module.exports = {Style}