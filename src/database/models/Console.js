module.exports = (sequelize, DataTypes) => {

    const Console = sequelize.define("Console", {
        idConsole: {
            type: DataTypes.INTEGER,
            primaryKey:true
        },
        name: {
            type: DataTypes.STRING(20),
        }
    }, {
        tablename: "console",
        timestamps: false
    })
    return Console;
}