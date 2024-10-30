module.exports = (sequelize, DataTypes) => {

    const Ticket = sequelize.define("Ticket", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        event_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        seat_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        service_fee: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ticket_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    Ticket.associate = (models) => {
        Ticket.hasMany(models.Cart, {
            foreignKey: "ticket_id",
            as: "ticket_model",
        });
        Ticket.belongsTo(models.Ticket_Type, {
            foreignKey: "ticket_type_id",
            as: "ticket_ticket_type_id",
        });
        
        Ticket.belongsTo(models.Event, {
            foreignKey: "event_id",
            as: "ticket_event_id",
        });
        
        Ticket.belongsTo(models.Seat, {
            foreignKey: "seat_id",
            as: "ticket_seat_id",
        });
        Ticket.belongsTo(models.Status, {
            foreignKey: "status_id",
            as: "ticket_status_id",
        });
    }

    return Ticket;
};
