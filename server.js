console.clear();
const db = require("./model/db.config");
const express = require("express");
const app = express();
const colors = require("colors");
const { PORT } = require("./config");
const errorHandler = require("./services/error/errorHandler");
const userRouter = require("./routes/user.routes");
db.sequelize
  .sync()
  .then((d) =>
    console.log("All models were synchronized successfully.".bgMagenta)
  )
  .catch(console.error);

app.use(express.json());
app
  .get("/", (req, res) => res.json({ con: "done" }))
  .listen(PORT, () => console.log(`servers up ${PORT}`.bgGreen));
app.use("/user", userRouter);
app.use("*", (req, res, next) => next(new Error("Page not found")));
app.use(errorHandler);
