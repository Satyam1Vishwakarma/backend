const express = require("express");
const User = require("../models/users");
const Claim = require("../models/claims");

module.exports = (io) => {
  const router = express.Router();

  router.post("/", async (req, res) => {
    const { userId } = req.body;
    const points = Math.floor(Math.random() * 10) + 1;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    user.totalPoints += points;
    await user.save();

    io.emit("claim_update");

    res.json({ points });
  });

  return router;
};
