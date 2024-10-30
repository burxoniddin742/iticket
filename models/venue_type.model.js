module.exports = (sequelize, DataTypes) => {

    const Venue_type = sequelize.define("Venue_type", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Venue_type.associate = (models) => {
        Venue_type.hasMany(models.Venue,{
            foreignKey: "venue_type_id",
            as: "venue_type_model",
        })
    }

    return Venue_type;
};
