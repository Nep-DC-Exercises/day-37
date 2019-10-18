const db = require("./conn");

class ExecutiveList {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // async await functions should be used with try catch
    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM ceos;`);
            return response;
        } catch(err) {
            return err.message
        }
    };
}

module.exports = ExecutiveList