module.exports = (sequelize, DataTypes) => {

const Productos = sequelize.define("Productos", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.VARCHAR(100)
    },
    description: {
        type: DataTypes.VARCHAR(200)
    },
    price: {
        type: DataTypes.FLOAT
    },
    stock: {
        type: DataTypes.INTEGER
    },
    console_name: {
        type: DataTypes.VARCHAR(20)
    },
    image: {
        type: DataTypes.VARCHAR(100)
    },
    generos: {
        type: DataTypes.VARCHAR(200)
    }
}, {
    tablename: "productos",
    timestamps: false
})
return Productos;
}