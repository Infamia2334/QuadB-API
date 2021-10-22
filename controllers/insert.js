const db = require("../models");
const Users = db.Users;
const fs = require("fs");

module.exports = async (req, res) => {
  if (!req.body.email) {
    res.send({ email: "not found!" });
  }
  if (!req.body.password) {
    res.send({ password: "Not Found!" });
  }

  const user = {
    user_name: req.body.userName,
    user_email: req.body.email,
    user_password: req.body.password,
    user_image: fs.readFileSync(__basedir  + "/resources/" + req.file.fileName),
    total_orders: req.body.totalOrders,
  };

  Users.create(user)
    .then((data) => {
      res.send({ success: "true", data });
    })
    .catch((err) => {
      res.status(500).send({
        success: "false",
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};
