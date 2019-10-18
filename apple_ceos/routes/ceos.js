const express = require("express"),
    router = express.Router(),
    ceoModel = require("../models/ceoModel");

/* GET home page. */
router.get("/", async function(req, res, next) {
  // Request to our model. This is the controller accessing the model.  
  const executiveData = await ceoModel.getAll();
  
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

module.exports = router;
