const db = require("../models");
const Users = db.Users;

module.exports = async (req, res) => {
  const id = req.params.id;

  Users.update(req.body, {
    where: { id: id },
  })
    .then((success) => {
      if (success == 1) {
        res.send({
          message: "User was updated Successfully.",
        });
      } else {
        res.send({
          message: `Cannot update User with id = ${id}, please try again and check for errors.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error while updating User with id = ${id}`,
      });
    });
};
