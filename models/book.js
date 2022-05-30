const {Style} = require("./style");
const {Author} = require("./author");
const {Genre} = require("./genre");

const books = []
let index = 0

class Book {
    constructor(name, description, author, genre, style, pages, publisher, id = -1) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.author = author;
        this.genre = genre;
        this.style = style;
        this.pages = pages;
    }

    save() {
        //validation
        if (Style.getByID(this.style) === undefined) {
            throw "No such style"
        }

        if (Author.getByID(this.author) === undefined) {
            throw "No such author"
        }

        if (Genre.getByID(this.genre) === undefined) {
            throw "No such genre"
        }
        this.id = index
        books.push(this)

        index++
    }

    static getAll() {
        return books
    }

    static getByID(id) {
        for (let i = 0; i < books.length; i++) {
            if (books[i].id === parseInt(id)) {
                return books[i]
            }
        }
        return undefined
    }

    static deleteByID(id) {
       for (let i = 0; i < books.length; i++) {
            if (books[i].id === parseInt(id)) {
                books.splice(id,1)
                return true
            }
       }
       return false
    }

    static searchByName(name){
        let tempBooks = []
        for (let i = 0; i < books.length; i++) {
            if (books[i].name === name) {
                tempBooks.push(books[i])
            }
        }
        return tempBooks
    }
}

module.exports = {Book}