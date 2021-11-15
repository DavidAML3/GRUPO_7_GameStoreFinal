const { Router } = require('express');
const db = require("../database/models")

module.exports = {
    list: (req,res) => {
        db.Productos.findAll()
        .then(games => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: games.length,
                },
                data: {
                    id: req.body.id,
                    name: req.body.name,
                    description: req.body.username,
                    price: req.body.price,
                    console_name: req.body.console_name,
                    detail: "/api/games/:id"
                }
            }
            res.json(respuesta);
        })
    },
    detail: (req,res) => {
        let id = req.params.id;
        db.Productos.findByPk(id)
        .then(games => {
            let respuesta = {
                data: {
                    id: req.body.id,
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price,
                    stock: req.body.stock,
                    console_name: req.body.console_name,
                    image: req.body.image,
                    generos: req.body.generos
                } 
            }
            res.json(respuesta);
        })
    }
}