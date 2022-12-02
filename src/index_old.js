// Aplicacion basica con Express

const express = require("express");
const app = express();

// ------------------------------- CONFIGURACIONES -------------------------------

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ------------------------------- RUTAS -------------------------------

app.get("/", (req, res) => {
  res.send("Hola mundo con Node y Nodemon");
});

//Cuando es GET el parametro nombre se recibe por la URL
app.get("/saludo/:nombre", (req, res) => {
  res.send("Hola " + req.params.nombre + ", es un endpoint GET");
});

//Cuando es POST el parametro nombre se recibe por el BODY
app.post("/saludo", (req, res) => {
  res.send("Hola " + req.body.nombre + ", es un endpoint POST");
});

// ------------------------------ PUERTO -------------------------------

const port = 5000;

app.listen(port, () => {
  console.log(`Servidor express corriendo en el puerto ${port}`);
});
