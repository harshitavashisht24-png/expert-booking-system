const router = require("express").Router();

const Expert = require("../models/Expert");

router.get("/", async (req, res) => {

  const { page = 1, category, search } = req.query;

  let query = {};

  if (category) {
    query.category = category;
  }

  if (search) {
    query.name = {
      $regex: search,
      $options: "i",
    };
  }

  const experts = await Expert.find(query)
    .skip((page - 1) * 5)
    .limit(5);

  res.json(experts);
});

router.get("/:id", async (req, res) => {

  const expert = await Expert.findById(req.params.id);

  res.json(expert);
});

module.exports = router;