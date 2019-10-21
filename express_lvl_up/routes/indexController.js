const express = require("express"),
    router = express.Router(),
    model = require("../models/indexModel");

router.get("/", async function(req, res, next) {
    const topicNames = await model.getTopics();
    const rankingData = await model.getRankings();
    const joinedData = await model.getTopicRanking();

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

router.post("/add", async (req, res) => {
    let body = req.body.formData;

    // for (let i = 1; i < body.length + 1; i++) {
    //     model.updateRanking(i, body[i - 1]);
    // }

    for (let i = 0; i < body.length; i++) {
        console.log(i);

        const update = await model.updateRanking(i + 1, body[i]);
    }

    res.redirect("/");

});

module.exports = router;
