//CONTROLADOR DE MEDICO

module.exports = {
  listar: async (req, res, next) => {
    try {
      console.log("Llego a medicoController >> listar");
      res.json({
        mensaje: "Curso Node JS. medicoController >> listar",
      });
    } catch (error) {
      console.log(error);
    }
  },

  crear: async (req, res, next) => {
    try {
      console.log("Llego a medicoController >> crear");
      res.json({
        mensaje: "Curso Node JS. medicoController >> crear",
      });
    } catch (error) {
      console.log(error);
    }
  },

  listarInfo: async (req, res, next) => {
    try {
      console.log("Llego a medicoController >> listarInfo");
      res.json({
        mensaje: "Curso Node JS. medicoController >> listarInfo",
      });
    } catch (error) {
      console.log(error);
    }
  },

  prueba: async (req, res, next) => {
    try {
      console.log("Llego a medicoController >> prueba");
      res.json({
        mensaje: "Curso Node JS. medicoController >> prueba",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
