const pruebasController = require("../../controllers/pruebasController/pruebasController");

const pruebasHandler = async (req, res) => {
  try {
    const prueba = await pruebasController();
    res.status(200).json(prueba); //array de usuarios
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "pruebas no funciona" });
  }
};

module.exports = pruebasHandler;