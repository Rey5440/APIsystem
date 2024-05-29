
const pruebasController = async () => {
  try {
    const ahora = new Date();
    const horas = ahora.getHours();
    return "hola";
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    throw error;
  }
};

module.exports = pruebasController;