const express = require('express');
const app = express();
/* configs */
const config = require('./config/config').config;
const port = config.port;
/* helpers */
const helper = require('./helpers/helpers');
/* routes */

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log(`App listening ${port}`)
});