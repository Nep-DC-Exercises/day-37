const db = require("./conn");

class Ranking {
    static async getTopics() {
        try {
            const response = await db.any(`SELECT * FROM topics;`);
            return response;
        } catch (err) {
            return console.log("error", err);
        }
    }

    static async getRankings() {
        try {
            const response = await db.any(`SELECT * FROM ranking;`);
            return response;
        } catch (err) {
            return console.log("error", err);
        }
    }

    static async getTopicRanking() {
        try {
            const response = await db.any(
                `SELECT t.topic_name, r.rank_name 
                    FROM ranking r
                    INNER JOIN topics t ON r.id = t.topic_rank`
            );
            return response;
        } catch (err) {
            return console.log("error", err);
        }
    }

    static async updateRanking(i, rank_id) {
        try {
            const response = db.result(`UPDATE topics 
            SET topic_rank=${rank_id}
            WHERE id=${i}
            RETURNING id, topic_rank`);
            return response
        } catch (err) {
            console.log(err)
        }

    } 

}

module.exports = Ranking;
