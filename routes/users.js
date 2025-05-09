const express = require("express");
const router = express.Router();

const rootDir = require("../util/path");
const path = require("path");

const mainData = require("./main");

router.get("/users", (req, res) => {
  const users = mainData.users;
  res.render("users", {
    pageTitle: "Users",
    path: "/admin/users",
    addUsers: true,
  });
});

router.post("/add-user", (req, res) => {
  mainData.users.push({ name: req.body.name });
  console.log(mainData.users);
  res.redirect("/");
});

module.exports = router;
