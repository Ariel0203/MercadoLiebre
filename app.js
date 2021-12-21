const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, './public')));  

app.listen(process.env.PORT || 3002, () => {
    console.log("Servidor corriendo en el puerto 3002...");
});

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname + '/views/home.html'));  // Permite enviar un archivo HTML
});

app.get('/creatucuenta', (req, res) =>{
    res.sendFile(path.resolve(__dirname + '/views/register.html'));  
});

app.get('/login', (req, res) =>{
    res.sendFile(path.resolve(__dirname + '/views/login.html'));  
});
