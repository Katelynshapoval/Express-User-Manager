const express = require("express");
const router = express.Router();

const rootDir = require("../util/path");
const path = require("path");
const { title } = require("process");

const users = [];

router.get("/", (req, res) => {
  res.render("main", {
    pageTitle: "Home",
    users: users,
    path: "/",
  });
});

exports.users = users;
exports.routes = router;
