const express = require('express');
// const express = require('../../NewsCompany - copia/dist/NewsCompany')
const Constantino = express();

Constantino.use(express.static('../../NewsCompany - copia/dist/NewsCompany'))


Constantino.listen(80, () => {
    console.log("Escuchando en puerto 80")
})
