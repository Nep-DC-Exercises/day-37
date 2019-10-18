const express = require("express"),
    router = express.Router(),
    ExecutiveModel = require("../models/ceoModel");

router.get("/", async function(req, res, next) {
    // Request to our model. This is the controller accessing the model.
    const executiveData = await ExecutiveModel.getAll();

    res.render("template", {
        locals: {
            title: "Apple CEOs page",
            // This is the controller creating the view
            data: executiveData
        },
        partials: {
            partial: "partial-ceos"
        }
    });
});

router.post("/add", async (req, res) => {
    const { ceo_name, ceo_year } = req.body;
    // const ceo_name = req.body.ceo_name;
    // const ceo_year = req.body.ceo_year;
    const executiveInstance = new ExecutiveModel(ceo_name, ceo_year);

    // this variable contains the response from adding into the database
    const executive = await executiveInstance.createNewCEO();
    
    if (executive.rowCount !== 1) {
        res.sendStatus(500);
    } else {
        res.redirect("/ceos");
    }
});

module.exports = router;
