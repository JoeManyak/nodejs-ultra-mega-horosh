const req = require("../database/database");

const tableName = 'authors'
class Author {
    constructor(firstname, lastname, id) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.id = id;
    }

    async save() {
        await req.query('INSERT INTO ' + tableName +
            ' (firstname, lastname) VALUES (?,?)',
            [this.firstname, this.lastname])
    }

    static async getAll() {
        return await req.query('SELECT * FROM ' + tableName)
    }
}

module.exports = {Author}