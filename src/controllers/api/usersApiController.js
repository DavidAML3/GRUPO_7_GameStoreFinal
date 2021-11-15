const { Router } = require('express');
const db = require("../database/models")

module.exports = {
    list: (req,res) => {
        db.Usuarios.findAll()
        .then(usuarios => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: usuarios.length,
                },
                data: {
                    id: req.body.id,
                    name: req.body.name,
                    username: req.body.username,
                    detail: "/api/users/:id"
                }
            }
            res.json(respuesta);
        })
    },
    detail: (req,res) => {
        let id = req.params.id;
        db.Usuarios.findByPk(id)
        .then(usuario => {
            let respuesta = {
                data: {
                    id: req.body.id,
                    name: req.body.name,
                    username: req.body.username,
                    image: req.body.image,
                    birthday: req.body.birthday,
                    generosInteres: req.body.generosInteres
                } 
            }
            res.json(respuesta);
        })
    }
}