'use strict'

module.exports = (sequelize, DataTypes) => {
    const Driver = sequelize.define('Driver', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true
        },
        hourly_rate: {
            type: DataTypes.DECIMAL(4, 2),
            allowNull: false
        },
        profile_picture: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    }, {
        timestamps: true,
        tableName: 'drivers'
    });

    return Driver;
}