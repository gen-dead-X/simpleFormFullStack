import express from "express";
import routes from "./routes/routes.js";
import dbConnection from "./config/databaseConnector.js";

const app = express();

app.use(express.json());
app.use(routes);

app.use((req, res, next) => {
  res.status(404);
  next(new Error("Page Not found"));
});

app.use((error, req, res, next) => {
  res.send({ message: error.message, data: null, success: false });
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
