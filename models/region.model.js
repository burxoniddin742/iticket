module.exports = (sequelize, DataTypes) => {
    const Region = sequelize.define("Region", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postpone: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    Region.associate = (models) => {
        Region.hasMany(models.Customer_address, {
            foreignKey: "region_id",
            as: "regions"
        })
        Region.hasMany(models.Venue, {
            foreignKey: "region_id",
            as: "region_method"
        })
        Region.hasMany(models.District, {
            foreignKey: "region_id",
            as: "DistrictType"
        })
    }

    return Region;
}