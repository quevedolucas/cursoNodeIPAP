//CONTROLADOR DE USUARIO

module.exports = {
  listar: async (req, res, next) => {
    try {
      console.log("Llego a medicamentoController >> listar");
      res.json({
        mensaje: "Curso Node JS. medicamentoController >> listar",
      });
    } catch (error) {
      console.log(error);
    }
  },

  crear: async (req, res, next) => {
    try {
      console.log("Llego a medicamentoController >> crear");
      res.json({
        mensaje: "Curso Node JS. medicamentoController >> crear",
      });
    } catch (error) {
      console.log(error);
    }
  },

  listarInfo: async (req, res, next) => {
    try {
      console.log("Llego a medicamentoController >> listarInfo");
      res.json({
        mensaje: "Curso Node JS. medicamentoController >> listarInfo",
      });
    } catch (error) {
      console.log(error);
    }
  },

  prueba: async (req, res, next) => {
    try {
      console.log("Llego a medicamentoController >> prueba");
      res.json({
        mensaje: "Curso Node JS. medicamentoController >> prueba",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
