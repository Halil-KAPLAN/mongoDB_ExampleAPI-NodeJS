const express = require("express");
const app = express();
require("dotenv").config();
require("./src/config/databaseConnection")
const port = process.env.PORT || 5001;
const studentRouter = require("./src/routers/studentRouter");
const studentClassesRouter = require("./src/routers/studentClassesRouter");
const teachersRouter = require("./src/routers/teachersRouter");


app.use(express.json());
app.use("/api", studentRouter);
app.use("/api", studentClassesRouter);
app.use("/api", teachersRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Student Sample Api :)");
});

app.listen(port, () => {
  console.log(`Created from server ${port} port ...`);
});
