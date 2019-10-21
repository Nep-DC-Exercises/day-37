const express = require("express"),
    router = express.Router(),
    model = require("../models/indexModel");

router.get("/", async function(req, res, next) {
    const modelData = await model.getOne();
    const rankingData = await model.getRankings();
    const joinedTable = await model.joinTable();

    const ranks = rankingData
        .map(ranking => {
            let option = `<option value=${ranking.rank_name}> ${ranking.rank_name}</option>`;

            return option;
        })
        .join("");

    res.render("template", {
        locals: {
            title: "Rankings",
            data: modelData,
            ranking: ranks
        },
        partials: {
            partial: "partial-index"
        }
    });
});

module.exports = router;
