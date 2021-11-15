const fs = require('fs');

const User = {
	fileName: './src/data/user.json',

	getData: function() {
		return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
	},

	generateId: function() {
		let allUsers = this.findAll();
		let lastUser = allUsers.pop();
		if (lastUser) {
			return lastUser.id + 1;
		}
		return 1;
	},

	findAll: function() {
		return this.getData()
	},

	findByPk: function(id) {
		let allUsers = this.findAll()
		let userFound = allUsers.find(oneUser => oneUser.id === id);
		return userFound;
	},

	findByField: function(field, text) {
		let allUsers = this.findAll()
		let userFound = allUsers.find(oneUser => oneUser[field] === text);
		return userFound;
	},

	create: function(userData) {
		let allUsers = this.findAll();
		let newUser = {
			id: this.generateId(),
			...userData
		}
		allUsers.push(newUser);
		fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
		return true;
	},

	delete: function(id) {
		let allUsers = this.findAll();
		let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
		fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
		return true;
	}
}


module.export = (sequelize, DataTypes) => {

    const Usuarios = sequelize.define("Usuarios", {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.VARCHAR(20)
        },
        username: {
            type: DataTypes.VARCHAR(20)
        },
        password: {
            type: DataTypes.VARCHAR(20)
        },
        image: {
            type: DataTypes.VARCHAR(100)
        },
        birthday: {
            type: DataTypes.DATE
        },
        generosInteres: {
            type: DataTypes.VARCHAR(200)
        },
        usuariosCategory_admin: {
            type: DataTypes.TINYINT
        },
    }, {
        tablename: "usuarios",
        timestamps: false
    })
    return Usuarios;
}

module.exports = User;