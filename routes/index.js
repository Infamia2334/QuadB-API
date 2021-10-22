const details = require("../controllers/details");
const update = require("../controllers/update");
const image = require("../controllers/image");
const insert = require("../controllers/insert");
const deletion = require("../controllers/delete");
const insertAuth = require("../middlewares/auth");
const upload = require("../middlewares/upload");

const app = (module.exports = require("express")());

app.get("/details", details);

app.put("/update", update);

app.get("/image", image);

app.post("/insert", upload.single("file"), insert);

app.delete("/delete", deletion);
