const { Router } = require("express");
const createUserHandler = require("../../handlers/users/createUserHandler");
const router = Router();



router.post("/", createUserHandler); // RECORDAR LA RUTA COMPLETA, esta parte es despues del /random1


module.exports = router;