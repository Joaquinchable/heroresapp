import React from "react";

const HeroBox = (props) => {
 
    
  return (
    <div className={props.className}>
      <h1>
        
        Mi nombre es: {props.name} y soy : {props.heroName}
      </h1>

      {props.children}
    </div>
  );
};

export default HeroBox;

// Props nos ayudan a reutilizar componentes y modificar sus valores en propiedades que compartan
