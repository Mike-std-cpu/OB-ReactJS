import React, { Component } from 'react' //* IMportamos un componente react, para que al renderizar se sepa que es un componente react
import PropTypes from 'prop-types'; //* Nos sirven para especificar el tipo de datos de los props, evitando errores de instrodcucoon de tipos de datos.

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
        <p> Tu edad es {this.state.age}</p>
        <div>
            <button onClick={this.birtday}>
                Cumplir años
            </button>
        </div>
      </div>
    );
  }

  birtday = () =>{
    this.setState((statePrevio) => (
        {
            age: statePrevio.age + 1
        }
    ))
  }

}

export default Greeting; //* Exportmaos para poder usar o conectar en otros files dentro del prooye4cto, en especificacion de la clase


//* Aqui especificamos el tipo de dato, si definimos un string y meten un int, no haya problema en la especificacion
Greeting.protoType = {
     name: PropTypes.string
     //* Debemos tener en cuentsa que los valores que se encuentren en state, son inmutables (Son como las clases privadas en una clase), solo de modificaran si se crea una clase especifica para eso.

};