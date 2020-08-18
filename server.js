const express = require('express');
const app = express();
app.use(express.json());
/* configs */
const config = require('./config/config').config;
const port = config.port;
/* routes */
const routes = require('./routes/routes').router;
app.use(routes);

app.listen(port, () => {
    console.log(`App listening ${port}`)
});