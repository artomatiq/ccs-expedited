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
            alloqNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true
        },
        hourly_rate: {
            type: DataTypes.DECIMAL(4, 2),
            alloqNull: false
        },
        profile_picture: {
            type: DataTypes.string(255),
            allowNull: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    }, {
        timestamps: true,
        tableName: 'drivers'
    });

    return Driver;
}