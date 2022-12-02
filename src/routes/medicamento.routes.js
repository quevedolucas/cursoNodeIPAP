//RUTAS DE LOS MEDICAMENTOS

const router = require("express").Router();
const medicamentoController = require("../controllers/medicamentoController");

router.get("/prueba", medicamentoController.prueba);
router.get("/", medicamentoController.listar);
router.post("/", medicamentoController.crear);
router.get("/:idMedicamento", medicamentoController.listarInfo);

module.exports = router;
