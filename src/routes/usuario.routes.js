//RUTAS DE LOS USUARIOS

const router = require("express").Router();
const usuarioController = require("../controllers/usuarioController");

router.get("/prueba", usuarioController.prueba);
router.get("/", usuarioController.listar);
router.post("/", usuarioController.crear);
router.get("/:idUsuario", usuarioController.listarInfo);

module.exports = router;
