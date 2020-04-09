
module.exports = function(sequelize, DataTypes){
 
    var User = sequelize.define("User", {
        email: DataTypes.STRING,
        userId: DataTypes.STRING,
        userImageURL: DataTypes.STRING,
        userName: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING
    });

    return User;
}
