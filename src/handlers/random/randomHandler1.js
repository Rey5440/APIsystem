const randomControler1 = require("../../controllers/randomController/randomController1");


const randomHandler1 = async (req, res) => {
  try {
    const { value } = req.body
    const random = await randomControler1(value);

    res.status(200).json(random); //array de usuarios
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "pruebas no funciona" });
  }
};

module.exports = randomHandler1;