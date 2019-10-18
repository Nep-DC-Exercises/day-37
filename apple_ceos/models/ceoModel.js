const db = require("./conn");

class Executive {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // async await functions should be used with try catch
    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM ceos;`);
            return response;
        } catch (err) {
            return err.message;
        }
    }

    async createNewCEO() {
        try {
            // example of sanitizing inputs - parameterization
            const response = await db.result(
                `INSERT INTO ceos (name, year) VALUES ($1, $2);`,
                [this.name, this.year]
            );
            return response;
        } catch (err) {
            return err.message;
        }
    }
}

module.exports = Executive;
