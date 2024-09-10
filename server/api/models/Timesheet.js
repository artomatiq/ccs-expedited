'use strict';

module.exports = (sequelize, DataTypes) => {
    const Timesheet = sequelize.define('Timesheet', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        driver_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'drivers',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        clock_in: {
            type: DataTypes.DATE,
            allowNull: true
        },
        clock_pause: {
            type: DataTypes.DATE,
            allowNull: true
        },
        clock_resume: {
            type: DataTypes.DATE,
            allowNull: true
        },
        clock_out: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
            timestamps: false,
            tableName: 'timesheet'
        }
    );

    Timesheet.associate = (models) => {
        Timesheet.belongsTo(models.Driver, {
            foreignKey: 'driver_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });
    }

    return Timesheet;
}