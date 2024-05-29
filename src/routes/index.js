const { Router } = require("express");
const pruebasHandler = require("../handlers/pruebas/pruebasHander");
const randomHandler1 = require("../handlers/random/randomHandler1");


const router = Router(); // ejecuta Router de express

router.use("/pruebas", pruebasHandler); //  .use de Router lleva path y callback (previamente importado)
router.use("/random1", randomHandler1)

module.exports = router;
