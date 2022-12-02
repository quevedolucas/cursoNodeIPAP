//RUTAS DE LOS MEDICOS

const router = require("express").Router();
const medicoController = require("../controllers/medicoController");

router.get("/prueba", medicoController.prueba);
router.get("/", medicoController.listar);
router.post("/", medicoController.crear);
router.get("/:idMedico", medicoController.listarInfo);

module.exports = router;
