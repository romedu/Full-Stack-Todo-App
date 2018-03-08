const express = require("express"),
      helpers = require("../helpers/todo"),
      router  = express.Router();

router.route("/")
    .get(helpers.index)
    .post(helpers.create);
    
router.route("/:id")
    .get(helpers.show)
    .put(helpers.update)
    .delete(helpers.delete);
    
module.exports = router;