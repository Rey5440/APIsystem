const User = require("../../DB/models/User");

const createUserController = async (name, email, image, admin, credits, isDelete) => {
  try {
    // Verificar si el usuario ya existe por email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return "El usuario ya existe";
    }

    // Crear nuevo usuario si no existe
    const newUser = new User({
      name,
      email,
      image,
      admin,
      credits,
      isDelete
    });

    await newUser.save();

    return newUser;
  } catch (error) {
    console.error("Error al crear usuario:", error);
    throw error;
  }
};

module.exports = createUserController;
