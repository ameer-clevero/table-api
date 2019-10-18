const express = require('express');
const app = express();
const db = require("./db");
app.get('/', async(req, res) => {
    const result = await db.sequelize.query("SELECT TABLE_NAME FROM `TABLES`", {
        type: db.Sequelize.QueryTypes.SELECT
    })
    return res.send(result);
});
app.listen(8008);