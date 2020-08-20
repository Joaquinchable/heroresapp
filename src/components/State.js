import React, { Component } from "react";

class ClockUsingClass extends Component {
  // ciclo de vida  tegon la informacion con compenentDidMount setState modifica la informacion  y
   // con compoenentWillMount limpia la informacion
  constructor(props) {
   
    super(props);
    this.state = { date: new Date() };   // estado inicial 
  }

  componentDidMount() {
    this.time = setInterval(() => {
      // tengo la info

      this.changeTime();
    }, 1000); // cada segundo cambio la informacion           // modifico mi estado 
  }

  changeTime() {
    // me encargo de cambiar la informacion

    this.setState({ date: new Date() });
  }


  componentWillMount() {
    // limpio la informacion
                                                    // estado limpio de modificacion
    clearInterval(this.state);
  }

  

  render() {
    return (
      <div>
        <h1>Hola desde una compnente CLass</h1>
        <h2>La hora es : {this.state.date.toLocaleTimeString()} </h2>
      </div>
    );
  }
}

export default ClockUsingClass;
