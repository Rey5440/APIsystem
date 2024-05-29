const randomHelper1 = require("../../helpers/randomHelper1")

const randomControler1 = async () => {
  try {
    const primero = randomHelper1(30)
    const segundo = randomHelper1(30)
    const tercero = randomHelper1(30)
    const cuarto = randomHelper1(30)
    const quinto = randomHelper1(30)
    
    const result = {
      primero,
      segundo,
      tercero,
      cuarto,
      quinto
    }
    console.log(result)
    return result;
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    throw error;
  }
};

module.exports = randomControler1;