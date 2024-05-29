const { Router } = require("express");
const pruebasHandler = require("../../handlers/pruebas/pruebasHander");

const router = Router();



router.get("/pruebas", pruebasHandler);


module.exports = router;