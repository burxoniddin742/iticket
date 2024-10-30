module.exports = (sequelize, DataTypes) => {

    const Venue = sequelize.define("Venue", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        site: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        venue_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        house: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        region_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        district_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    Venue.associate = (models) => {
        Venue.hasMany(models.Seat, {
            foreignKey: "venue_id",
            as: "venue",
        })
        Venue.hasMany(models.Venue_photo, {
            foreignKey: "venue_id",
            as: "venues",
        })
        Venue.belongsTo(models.Venue_type, {
            foreignKey: "venue_type_id",
            as: "venue_venue_type_id",
        })
        Venue.belongsTo(models.Region, {
            foreignKey: "region_id",
            as: "venue_region_id",
        })
        Venue.belongsTo(models.District, {
            foreignKey: "district_id",
            as: "venue_district_id",
        })
        Venue.hasMany(models.Event, {
            foreignKey: "venue_id",
            as: "venue_method",
        })
    }

    return Venue;
};
