const { Router } = require('express');
const fs = require('fs');
const path = require('path');
const db = require("../database/models")

const gamesFilePath = path.join(__dirname, '../data/gamesDB.json');
const games = JSON.parse(fs.readFileSync(gamesFilePath, 'utf-8'));

const controller = {
    home: (req, res) => {
        let play = games.filter(element => element.console === 'Play');
        let xbox = games.filter(element => element.console === 'Xbox');
        let nintendo = games.filter(element => element.console === 'Nintendo');
        let pc = games.filter(element => element.console === 'PC');

        return res.render('home', { play: play, xbox: xbox, nintendo: nintendo, px: pc});
    },
    // register: (req, res) => {
    //     return res.render('register');
    // },
    // login: (req, res) => {
    //     return res.render('login');
    // },
    cart: (req, res) => {
        return res.render('productCart');
    },
    detail: (req, res) => {
        let id = req.params.id;
        let oneGame = games.find(element => element.id == id);
        res.render('productDetail', {oneGame: oneGame});
    },
    adminNewProduct: (req, res) => {
        return res.render('adminNewProduct');
        let newGame = req.body;
        db.Productos.create({
            name: req.body.nombre,
            description: req.body.descripcion,
            price: req.body.precio,
            stock: req.body.stock,
            console_name: req.body.consola,
            image: element.caratula,
            generos: req.body.generos
        })
        .then(()=>{
            res.redirect("/games")
        })
    },
    adminEditProduct: (req, res) => {
        let id = req.params.id;
        db.Productos.findByPk(id)
        .then(gameToEdit=>{
            res.render('adminEditProduct', {gameToEdit: gameToEdit});
        })
    },
    update: (req, res) => {
        db.Productos.update(
            req.body,
            {
                where: {id: req.params.id}
            })
        .then(()=>{
            res.redirect("/detail/" + req.params.id)
        })
    },
    list: (req,res)=>{
        db.Productos.findAll()
        .then( (data) => {
            res.render("algunaVista", {productos: data})
        })
    },
    destroy: function(req,res){
        db.Productos.destroy({
            where: {id: req.params.id}
        })
        .then(()=>{
            res.redirect("/games")
        })
    },
}

module.exports = controller;