const { Router } = require("express");
const pruebasHandler = require("../handlers/pruebas/pruebasHander");
/* const randomHandler1 = require("../handlers/random/randomHandler1"); */
const random1 = require("./routes/random1.js");
const users = require('./routes/users.js')


const router = Router(); // ejecuta Router de express
router.use("/pruebas", pruebasHandler); //  .use de Router lleva path y callback (previamente importado)
router.use("/random1", random1)
router.use("/users", users)

module.exports = router;
