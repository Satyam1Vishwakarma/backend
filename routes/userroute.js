const express = require("express");
const User = require("../models/users");

module.exports = (io) => {
  const router = express.Router();

  router.get("/", async (req, res) => {
    const users = await User.find();
    res.json(users);
  });

  router.post("/", async (req, res) => {
    const { name } = req.body;
    const newUser = new User({ name });
    await newUser.save();
    io.emit("new_user_added", newUser);
    res.json(newUser);
  });

  return router;
};
