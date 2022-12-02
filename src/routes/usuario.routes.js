//RUTAS DE LOS USUARIOS

const router = require("express").Router();
const usuarioController = require("../controllers/usuarioController");

router.get("/", usuarioController.listar);
router.post("/", usuarioController.crear);
router.get("/:idUsuario", usuarioController.listarInfo);
router.get("/", usuarioController.prueba);

module.exports = router;
