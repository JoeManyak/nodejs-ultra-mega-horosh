const genres = []
let index = 0

class Genre {
    constructor(name, description, id) {
        this.name = name;
        this.description = description;
        this.id = id
    }

    save() {
        this.id = index
        genres.push(this)

        index++
    }

    static getAll() {
        return genres
    }

    static getByID(id) {
        for (let i = 0; i< genres.length;i++) {
            if (genres[i].id === parseInt(id)) {
                return genres[i]
            }
        }
        return undefined
    }
}

module.exports = {Genre}