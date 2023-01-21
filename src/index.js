const express = require('express');
const {sequelize} = require('./models')

const {handleErrors} = require('./helpers/error');
const configs = require('./configs');

const app = express();
app.use(express.json());
app.use(express.static('.'));

sequelize.sync({ alter: true });

const v1 = require('./routers/v1');
const v2 = require('./routers/v2');
app.use('/fivernew/v1',v1);
app.use('/fivernew/v2',v2);

app.use(handleErrors);

app.listen(configs.PORT);