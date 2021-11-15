const { Router } = require('express');
const db = require("../database/models")
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')

const controller = {
    list: (req,res)=>{
        db.Usuarios.findAll()
        .then( (data) => {
            res.render("/users", {usuarios: data})
        })
    },
    register: (req, res) => {
        return res.render('register');
        let newUser = req.body;
        db.Usuarios.create({
            name: req.body.nombre,
            username: req.body.nombreUsuario,
            birthday: req.body.fecha,
            generosInteres: req.body.generos,
            image: element.fotoUsuario,
            password: req.body.contra,
        })
        .then(()=>{
            res.redirect("/users")
        })
    },
    processRegister: (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		let userInDB = db.Usuarios.findByField('nombreUsuario', req.body.nombreUsuario);

		if ( userInDB ) {
			return res.render('register', {
				errors: {
					nombreUsuario: {
						msg: 'Este usuario ya esta registrado'
					}
				},
				oldData: req.body
			})
		}

		let userToCreate = {
			...req.body,
			contra: bcrypt.hashSync(req.body.contra, 10),
			image: req.file.filename
		}

		console.log(req.file)
		console.log(userToCreate);

		let userCreated = db.Usuarios.create(userToCreate);

		return res.redirect('/user/login');
	},
    login: (req, res) => {
		return res.render('login');
    },
	loginProcess: (req, res) => {
		let userToLogin = db.Usuarios.findByField('nombreUsuario', req.body.nombreUsuario);

		console.log(req.body);

		if ( userToLogin ) {
			let isOkPassword = bcrypt.compareSync(req.body.contra, userToLogin.contra);
			if ( isOkPassword ) {
				req.session.userLogged = userToLogin;
				return res.redirect('/user/profile')
			}
		}

		return res.render('login', {
			errors: {
				nombreUsuario: {
					msg: 'No se encuentra este usuario en nuestra base de datos'
				}
			}
		})
	},
	profile: (req, res) => {
		console.log(req.session)
		return res.render('profile', {
			user: req.session.userLogged
		});
	},
	logout: (req, res) => {
		req.session.destroy();
		return res.redirect('/')
	},
    editUser: (req, res) => {
        let id = req.params.id;
        db.Usuarios.findByPk(id)
        .then(editUser=>{
            res.render('editUser', {editUser: editUser});
        })
    },
    update: (req, res) => {
        db.Usuarios.update(
            req.body,
            {
                where: {id: req.params.id}
            })
        .then(()=>{
            res.redirect("/users")
        })
    },
    destroy: function(req,res){
        db.Usuarios.destroy({
            where: {id: req.params.id}
        })
        .then(()=>{
            res.redirect("/users")
        })
    },
}

module.exports = controller;