const authors = []
let index = 0

class Author {
    constructor(firstname, lastname, id) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.id = id;
    }

    save() {
        this.id = index
        authors.push(this)

        index++
    }

    static getAll() {
        return authors
    }

    static getByID(id) {
        for (let i = 0; i< authors.length;i++) {
            if (authors[i].id === parseInt(id)) {
                return authors[i]
            }
        }
        return undefined
    }
}

module.exports = {Author}