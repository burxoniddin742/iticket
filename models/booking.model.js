module.exports = (sequelize, DataTypes) => {

    const Booking = sequelize.define("Booking", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        cart_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        fineshed: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        payment_method_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        delivery_method_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        discount_coupon_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    Booking.associate = (models) => {
        Booking.belongsTo(models.Cart, {
            foreignKey: "cart_id",
            as: "cart",
        });
        Booking.belongsTo(models.Payment, {
            foreignKey: "payment_method_id",
            as: "payment_method",
        });
        
        Booking.belongsTo(models.Delivery, {
            foreignKey: "delivery_method_id",
            as: "booking_delivery_method",
        });

        Booking.belongsTo(models.Discount, {
            foreignKey: "discount_coupon_id",
            as: "booking_discount_coupon",
        });

        Booking.belongsTo(models.Status, {
            foreignKey: "status_id",
            as: "booking_status_id",
        });
    }
    
    return Booking;
}