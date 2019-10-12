module.exports = function(sequelize, DataTypes) {
  var Profiles = sequelize.define("Profiles", {
    profileID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    auth_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    categoryType: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    about: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
    // lookingFor: {
    //   type: DataTypes.TEXT,
    //   allowNull: false,
    //   len: [1]
    // }
  });
  console.log("Start associate");
  Profiles.associate = function(models) {
    console.log("in associate");
    Profiles.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    console.log("done associate");
  };
  return Profiles;
};
