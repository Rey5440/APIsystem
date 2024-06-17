const randomHelper1 = require("../../helpers/randomHelper1")

const randomControler1 = async (value) => {
  try {

    console.log(value)
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
    const coincidencia = [
      ...primero.slice(-3),
      ...segundo.slice(-3),
      ...tercero.slice(-3),
      ...cuarto.slice(-3),
      ...quinto.slice(-3),
  ];
    /* console.log(coincidencia, 'esta es la coicidencia') */
    /* console.log(result) */
    return result;
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    throw error;
  }
};

module.exports = randomControler1;