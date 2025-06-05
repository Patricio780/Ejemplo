import React, { useState } from "react"; //Importamos el react y useState para guardar la informacion

//Definimos el componente de suma 
export default function Sumadora() {
  //Donde creamos los estados de los numeros y el resultado
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);

  //Funcion suma que se ejecuta al hacer click en el boton
  const sumar = () => {
    const suma = parseFloat(num1) + parseFloat(num2); 
    setResultado(suma); //Guarda el resultado
  };
  
  //Lo que mostrara en pantalla
  return (
    <div>
      <h1>Calculadora de Suma</h1>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Primer número"
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Segundo número"
      />

      <button onClick={sumar}>Sumar</button>

      {resultado !== null && (
        <p>Resultado: {resultado}</p>
      )}
    </div>
  );
}
