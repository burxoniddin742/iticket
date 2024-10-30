module.exports = (sequelize, DataTypes) => {

    const Seat = sequelize.define("Seat", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        sector: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        row_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        venue_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        seat_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    Seat.associate = (models) => {
        Seat.belongsTo(models.Seat_type, {
            foreignKey: "seat_type_id",
            as: "seatType",
        });
        Seat.belongsTo(models.Venue, {
            foreignKey: "venue_id",
            as: "venues",
        });
        Seat.hasMany(models.Ticket, {
            foreignKey: "seat_id",
            as: "seats",
        });
    };

    return Seat;
};
