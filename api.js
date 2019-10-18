const express = require('express');
const app = express();
const db = require("./db");
try {
    app.get('/', (req, res) => {
        db.sequelize.query("SELECT TABLE_NAME FROM `TABLES`", {
                type: db.Sequelize.QueryTypes.SELECT
            })
            .then(result => {
                return res.send(result);
            });
    });
} catch (err) {
    console.log(err);
}
app.listen(8008);