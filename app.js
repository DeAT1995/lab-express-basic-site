//requerimento
const express = require("express");

//servidor
const app = express();

//home
app.get("/home", (request, response) =>{
    response.sendFile(`${__dirname}/views/home.html`)
});

//about
app.get("/about", (request, response) =>{
    response.sendFile(`${__dirname}/views/about.html`)
});

//works
app.get("/works", (request, response) =>{
    response.sendFile(`${__dirname}/views/works.html`)
})

//iniciando o servidor
app.listen(3000, ()=> console.log("O servidor está rodando na porta 3000"));

