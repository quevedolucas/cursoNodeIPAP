//CONTROLADOR DE USUARIO

module.exports = {
  listar: async (req, res, next) => {},

  crear: async (req, res, next) => {},

  listarInfo: async (req, res, next) => {},

  prueba: async (req, res, next) => {
    try {
      console.log("Llego a usuarioController >> prueba");
      req.json({
        mensaje: "Curso Node JS. usuarioController >> prueba",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
