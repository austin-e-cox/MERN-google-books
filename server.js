const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const mongoose = require("mongoose");
// const routes = require("./routes/api");

const api = require('./routes/api');


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes
app.use("/api", api);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks")
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Define API routes here


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

