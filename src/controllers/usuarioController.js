//CONTROLADOR DE USUARIO

module.exports = {
  listar: async (req, res, next) => {
    try {
      console.log("Llego a usuarioController >> listar");
      res.json({
        mensaje: "Curso Node JS. usuarioController >> listar",
      });
    } catch (error) {
      console.log(error);
    }
  },

  crear: async (req, res, next) => {
    try {
      console.log("Llego a usuarioController >> crear");
      res.json({
        mensaje: "Curso Node JS. usuarioController >> crear",
      });
    } catch (error) {
      console.log(error);
    }
  },

  listarInfo: async (req, res, next) => {
    try {
      console.log("Llego a usuarioController >> listarInfo");
      res.json({
        mensaje: "Curso Node JS. usuarioController >> listarInfo",
      });
    } catch (error) {
      console.log(error);
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
