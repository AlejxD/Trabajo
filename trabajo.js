// Función sin parámetros
const funcionSinParametro = () => {
    console.log("Hola :D, este funcion sin parametros");
  };
  
  // Función con un parámetro
  const funcionConUnParametro = uno => {
    console.log("Esta es una función con un parámetro:", uno);
  };
  
  // Función con dos o más parámetros y variables con let y const
  const funcionConDosOMasParametros = (p1, p2) => {
    let v1 = 5;
    const v2 = "Hola muchacho :)";
  
    console.log("sisa");
    console.log("un:", p1);
    console.log("dos:", p2);
    console.log("un:", v1);
    console.log("dos:", v2);
  };
  
  // Llamados a las funciones
  funcionSinParametro();
  funcionConUnParametro("como tan muchacho");
  funcionConDosOMasParametros(2, true);
  