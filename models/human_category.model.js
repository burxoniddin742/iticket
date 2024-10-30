module.exports = (sequelize, DataTypes) => {

    const Human_category = sequelize.define("Human_category", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        start_age: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        finish_age: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    Human_category.associate = (models) => {
        Human_category.hasMany(models.Event, {
            foreignKey: "human_category_id",
            as: "human_category_method"
        })
        Human_category.belongsTo(models.Gender, {
            foreignKey: "gender_id",
            as: "human_category_gender_id"
        })
    }

    return Human_category;
};
