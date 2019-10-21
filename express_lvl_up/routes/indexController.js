const express = require("express"),
    router = express.Router(),
    model = require("../models/indexModel");

router.get("/", async function(req, res, next) {
    const topicNames = await model.getTopics();
    const rankingData = await model.getRankings();
    const joinedData = await model.getTopicRanking();
    console.log("Here's all the ranks... ", rankingData)
    console.log("Topic & Rank", joinedData);

    // const ranks = rankingData
    //     .map(ranking => {

    //         let option = `<option value=${ranking.rank_name}> ${ranking.rank_name}</option>`;
    //         return option;
    //     })
    //     .join("");

    res.render("template", {
        locals: {
            title: "Rankings",
            topics: topicNames,
            ranking: rankingData,
            skillsWithRanks: joinedData
        },
        partials: {
            partial: "partial-index"
        }
    });
});

module.exports = router;
