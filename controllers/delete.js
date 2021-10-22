const db = require("../models");
const Users = db.Users;

module.exports = async (req, res) => {
  const id = req.params.id;
  Users.destroy({
    where: { id: id },
  })
    .then((success) => {
      if (success == 1) {
        res.send({ message: `User with id = ${id} was deleted successfully` });
      } else {
        res.send({
          message: `Cannot delete User with id = ${id}, please check for errors`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id = " + id,
      });
    });
};
