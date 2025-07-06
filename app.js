const express = require("express"),
 app = express();
 cors = require("cors");
 MongoStore = require('connect-mongo');
 matchRoutes = require("./routes/match-routes");
 path = require("path");

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

app.use("/api/v1/badminton", matchRoutes);
  
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
module.exports = app;