const express = require("express");
const routes = require("./routes");
const db = require("./models")
require("dotenv").config();
const app = express();

global.__basedir = __dirname;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);



// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });
  
app.get("/", (req, res)=> res.send("Welcome to QuadB API"));
const port = process.env.PORT || 3003;

app.listen(port, () => console.log(`Listening on port ${port}`));
