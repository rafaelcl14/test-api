const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const rotaClientes = require('../routers/routers');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

app.use(cors());

app.use('/cliente', rotaClientes);


app.listen(5050, () => {
    console.log('Servidor Rodando');
})
