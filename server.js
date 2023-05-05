const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
//const helmet = require("helmet");
const routes = require("./routes/index");
const app = express();

// App middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
//app.use(helmet());

// Routes
app.use("/api", routes);

// Search API
app.get(`/search`, (req, res) => {
  const term = req.query.term; // Get the term from the URL
  const media = req.query.media; // Get the media type from the URL

  // Run a fetch request to the iTunes API using the term and media type specified by the user
  fetch(`https://itunes.apple.com/search?term=${term}&media=${media}&limit=30`)
    .then((result) => result.json()) // Change the result into json format
    .then((response) => {
      // Send the response if the request was successful
      res.send({
        message: "Search was successful",
        response,
      });
    })
    .catch((error) => {
      // If there is an error then catch the error and send the error message
      res.send({
        message: "There seems to be an error",
      });
    });
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "frontend/build")));
  // Handle React routing, return all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

// Port listener
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
