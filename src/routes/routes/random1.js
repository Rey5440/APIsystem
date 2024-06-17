const { Router } = require("express");
const router = Router();
const pruebasHandler = require("../../handlers/pruebas/pruebasHander");
const random1Handler = require("../../handlers/random/randomHandler1")




router.post("/", random1Handler); // RECORDAR LA RUTA COMPLETA, esta parte es despues del /random1


module.exports = router;