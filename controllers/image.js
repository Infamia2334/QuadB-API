const db = require("../models");
const Users = db.Users;

module.exports = async (req, res) => {
  const id = req.params.id;
  Users.findByPk(id).then((data) => {
    if (data.user_image) {
      res.send({ message: "Image Found", Image: data.user_image });
    } else {
      res.send("Image was not found");
    }
  });
};
