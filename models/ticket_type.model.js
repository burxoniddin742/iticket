module.exports = (sequelize, DataTypes) => {

    const Ticket_Type = sequelize.define("Ticket_Type", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        ticket_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Ticket_Type.associate = (models) => {
        Ticket_Type.hasMany(models.Ticket, {
            foreignKey: "ticket_type_id",
            as: "ticket_model_method",
        });
    }

    return Ticket_Type;
};
