const req = require('../database/database')

const tableName = 'books'

class Book {
    constructor(name, description, author, genre, style, pages, id = -1) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.author = author;
        this.genre = genre;
        this.style = style;
        this.pages = pages;
    }

    async save() {
        await req.query('INSERT INTO ' + tableName +
            ' (name, description, author, genre, style, pages) VALUES (?,?,?,?,?,?)',
            [this.name, this.description, this.author, this.genre, this.style, this.pages])
    }

    static async getAll() {
        return await req.query('SELECT * FROM ' + tableName)
    }

    static async deleteByID(id) {
        return await req.query(`DELETE FROM `+tableName+` WHERE id = ?`, id)
    }

    static async searchByName(name) {
        return await req.query(`SELECT * FROM `+tableName+` WHERE name = ?`,name)
    }
}

module.exports = {Book}