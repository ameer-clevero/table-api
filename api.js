const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const db = require("./db");
app.get('/', (req, res) => {
    db.sequelize.query("SELECT TABLE_NAME FROM `TABLES`", {
            type: Sequelize.QueryTypes.SELECT
        })
        .then(result => {
            return res.send(result);
        });
});
app.listen(8008);