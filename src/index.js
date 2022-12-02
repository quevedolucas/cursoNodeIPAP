// Aplicacion basica con Express
const express = require("express");
const constantes = require("./const/globalConstants");
const routerConfig = require("./routes/index.routes");

//Configuracion de express
const configuracionAPI = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  return;
};

//Configuracion de rutas
const configuracionRouter = (app) => {
  app.use("/api/", routerConfig.rutas_init);
  return;
};

const init = () => {
  const app = express(); //Crea la instancia de express
  configuracionAPI(app);
  configuracionRouter(app);

  app.listen(constantes.PORT, () => {
    console.log(`Servidor express corriendo en el puerto ${constantes.PORT}`);
  });
};

init();
