const createUserController = require("../../controllers/userController/createUserController");


const createUserHandler = async (req, res) => {
  
  try {

    const { name, email, image, admin, credits, isDelete } = req.body
    console.log(name, email, image, admin, credits, isDelete)
    const random = await createUserController(name, email, image, admin, credits, isDelete);

    res.status(200).json(random); //array de usuarios
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "error al crear usuario" });
  }
};

module.exports = createUserHandler;