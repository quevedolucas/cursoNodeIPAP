// SE ENCARGA DE CONECTAR TODAS LAS RUTAS

const { Router } = require("express");
const usuarioRoutes = require("../routes/usuario.routes");
const medicoRoutes = require("../routes/medico.routes");
const medicamentoRoutes = require("../routes/medicamento.routes");

const rutas_init = () => {
  const router = Router();

  router.use("/usuarios", usuarioRoutes);
  router.use("/medicos", medicoRoutes);
  router.use("/medicamentos", medicamentoRoutes);

  return router;
};

module.exports = { rutas_init };
