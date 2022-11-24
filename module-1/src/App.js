import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/*Componente propio greeting.jsx instanciando de la clase Greetings */}
        <Greeting name="Mike"></Greeting> {/* El componente name fue declarado como una propiuedad que aqui se tomara y se añadira como arguemento*/}
          ¡Hola mundo!🚀
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
