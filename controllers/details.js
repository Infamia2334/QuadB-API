const db = require("../models");
const Users = db.Users;

module.exports = async(req, res)=>{
    const id = req.params.id;

    Users.findByPk(id).then(data=>{
        if(data){
            res.send(data)
        }
        else{
            res.status(404).send({
                message: `Cannot find User with id=${id}.`
              });
        }
    })
}