const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.status(200).send("divyanshu router page");
// });


router.route("/").get((req, res) => {
    res.status(200).send("divyanshu router page");
  });
  


module.exports = router;


