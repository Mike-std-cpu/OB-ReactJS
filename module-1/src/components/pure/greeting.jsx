import React, { Component } from 'react' //* IMportamos un componente react, para que al renderizar se sepa que es un componente react

class Greeting extends Component {
  //* Como todo lenguaje de programcion, las clases tienen la posibilidad de tener constructores
  
constructor(props){
super(props);
//* componente privado del componente
this.state = {
    age: 24,
    lastName: "Andrade"
}
}

    render() { //! l render siempre debe de retornar un componente HTML
    return (
      <div>
        <h1>
            ¡Mi primer componenete en React!🚀
        </h1>
        <h2>
            ¡Hola {this.props.name} {this.state.lastName}! 🙂
        </h2>
      </div>
    )
  }
}

export default Greeting; //* Exportmaos para poder usar o conectar en otros files dentro del prooye4cto, en especificacion de la clase
