
module.exports = function(sequelize, DataTypes){
 
    const User = sequelize.define("users", {
        id: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
    },
        userName: {
            type:DataTypes.STRING,
            unique: true,
    },
        email: {
            type: DataTypes.STRING,
            unique: true,
    },
        userId: {
            type: DataTypes.STRING,
            unique: true,
    },
        userImageURL: {
            type: DataTypes.STRING,
            unique: true,
    },
        firstName: {
            type: DataTypes.STRING,
    },
        lastName: {
            type: DataTypes.STRING
    },
});

    return User;
}
