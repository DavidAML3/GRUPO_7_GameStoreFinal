module.exports = (sequelize, DataTypes) => {

const Productos = sequelize.define("Productos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100)
    },
    description: {
        type: DataTypes.STRING(200)
    },
    price: {
        type: DataTypes.FLOAT
    },
    stock: {
        type: DataTypes.INTEGER
    },
    console_name: {
        type: DataTypes.STRING(20)
    },
    image: {
        type: DataTypes.STRING(100)
    },
    generos: {
        type: DataTypes.STRING(200)
    }
}, {
    tablename: "productos",
    timestamps: false
})
return Productos;
}