module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("users", {
    user_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    user_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    user_email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
      unique: {
        args: true,
        msg: "Email address already in use!",
      },
    },
    user_password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    user_image: {
      type: Sequelize.BLOB,
      allowNull: true,
    },
    total_orders: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    created_at: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    last_logged_in: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: true,
    },
  });
  return Users;
};
