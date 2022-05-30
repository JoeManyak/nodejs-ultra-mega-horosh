const styles = []
let index = 0

class Style {
    constructor(name, description, id) {
        this.name = name;
        this.description = description;
        this.id = id;
    }

    save() {
        this.id = index
        styles.push(this)

        index++
    }

    static getAll() {
        return styles
    }

    static getByID(id) {
        for (let i = 0; i< styles.length;i++) {
            if (styles[i].id === parseInt(id)) {
                return styles[i]
            }
        }
        return undefined
    }
}

module.exports = {Style}