const req = require('../database/database')

const tableName = 'genres'
class Genre {
    constructor(name, description, id) {
        this.name = name;
        this.description = description;
        this.id = id
    }

    async save() {
        await req.query('INSERT INTO ' + tableName +
            ' (name, description) VALUES (?,?)',
            [this.name, this.description])
    }

    static async getAll() {
        return await req.query('SELECT * FROM ' + tableName)
    }
}

module.exports = {Genre}