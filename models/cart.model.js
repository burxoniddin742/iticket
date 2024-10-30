module.exports = (sequelize, DataTypes) => {

    const Cart = sequelize.define("Cart", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        ticket_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        fineshedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });


    Cart.associate = (models) => {
        Cart.hasMany(models.Booking, {
            foreignKey: "cart_id",
            as: "bookings",
        });

        Cart.belongsTo(models.Ticket, {
            foreignKey: "ticket_id",
            as: "cart_ticket_id",
        });

        Cart.belongsTo(models.Customer, {
            foreignKey: "customer_id",
            as: "cart_customer_id",
        });

        Cart.belongsTo(models.Status, {
            foreignKey: "status_id",
            as: "cart_status_id"
        })
    }

    return Cart;

}