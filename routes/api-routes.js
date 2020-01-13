var db = require("../models");

module.exports = function (app) {

    // GET 
    app.get("/api/burger", function (req, res) {
        db.Burger.findAll({}).then(function (dbBurger) {
            res.json(dbBurger);
        })
            .catch(function (err) {
                res.json(err);
            })
    })

    // POST
    app.post("api/burger", function (req, res) {
        db.Burger.create({
            name: req.body.name,
            devoured: req.body.devoured
        })
            .then(function (dbBurger) {
                res.json(dbBurger);
            })
            .catch(function (err) {
                res.json(err);
            })
    })

    // DELETE
    app.delete("/api/burger/:id", function (req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbBurger) {
                res.json(dbBurger);
            })
    })

    // UPDATE
    app.put("/api/burger", function (req, res) {
        db.Burger.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            })
            .then(function (dbBurger) {
                res.json(dbBurger);
            })
            .catch(function (err) {
                res.json(err);
            })
    })

}