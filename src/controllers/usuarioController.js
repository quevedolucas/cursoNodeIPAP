//CONTROLADOR CON LAS RUTAS DE USUARIO

const models = require("../database/models/index");

module.exports = {
  listar: async (req, res) => {
    try {
      const users = await models.usuario.findAll();

      res.json({
        success: true,
        data: {
          usuarios: users,
        },
      });
    } catch (err) {
      return next(err);
    }
  },

  crear: async (req, res) => {
    try {
      const user = await models.usuario.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        edad: req.body.edad,
      });

      res.json({
        success: true,
        data: {
          id: user.id,
        },
      });
    } catch (err) {
      return next(err);
    }
  },

  listarInfo: async (req, res, next) => {
    try {
      const user = await models.usuario.findOne({
        where: {
          id: req.params.idUsuario,
        },
      });

      res.json({
        success: true,
        data: {
          usuario: user,
        },
      });
    } catch (err) {
      return next(err);
    }
  },

  prueba: async (req, res, next) => {
    try {
      console.log("Llego a usuarioController >> prueba");
      res.json({
        mensaje: "Curso Node JS. usuarioController >> prueba",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
