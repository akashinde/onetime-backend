// Default
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Mongo
const CONNECTION_URL = require("./config/mongoKey").connectionUrl;

// Routes
const projectRoutes = require("./routes/projectRoutes.js");

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/projects", projectRoutes);

const PORT = process.env.PORT || 5000;

// Connecting to database then establishing connection
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  })
  .catch((err) => console.log(err.message));
