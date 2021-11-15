module.export = (sequelize, DataTypes) => {

    const Console = sequelize.define("Console", {
        idConsole: {
            type: sequelize.INTEGER,
            primaryKey:true
        },
        name: {
            type: DataTypes.VARCHAR(20),
        }
    }, {
        tablename: "console",
        timestamps: false
    })
    return Console;
}