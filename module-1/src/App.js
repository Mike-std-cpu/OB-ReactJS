import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting'; 
// import Greetingf from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/*Componente propio greeting.jsx instanciando de la clase Greetings */}
        {/* <Greeting name="Mike"></Greeting> El componente name fue declarado como una propiuedad que aqui se tomara y se añadira como arguemento */}
          
          {/* <Greetingf name="Miguel"></Greetingf> */}
          {/* Componente de Listado de Tareas */}
          <TaskListComponent></TaskListComponent>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ¡Hola mundo!🚀
        </a>
      </header>
    </div>
  );
}

export default App;
