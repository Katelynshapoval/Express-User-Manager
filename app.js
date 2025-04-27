const express = require("express");

const path = require("path");

const app = express();
const bodyParser = require("body-parser");

const mainRoutes = require("./routes/main");
const userRoutes = require("./routes/users");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", userRoutes);
app.use("/", mainRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
