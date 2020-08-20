import React, { useState, useEffect } from "react";

const Hooks = (props) => {
  const [time, setTime] = useState(new Date());

  const chageTime = () => {
    setTime(new Date()); // meotodo o funcion para cambiar la informacion
  };

  useEffect(() => {
    const tikc = setInterval(() => {
      // tengo la informacion

      chageTime(); // la modifico  la informacion
    }, 1000);

    return () => clearInterval(tikc);
  });
  return (
    <div>
      <h1>Hola Desde Hooks</h1>
      <h2>La hora es : {time.toLocaleTimeString()} </h2>
    </div>
  );
};

export default Hooks;
