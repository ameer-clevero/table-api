const express = require('express');
const app = express();
const db = require("./db");
app.get('/', async(req, res) => {
    await db.sequelize.query("SELECT TABLE_NAME FROM `TABLES`", {
            type: db.Sequelize.QueryTypes.SELECT
        })
        .then(result => {
            return res.send(result);
        });
});
app.listen(8008);