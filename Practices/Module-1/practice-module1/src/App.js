import logo from './logo.svg';
import './App.css';
import ContactShowComponent from './components/container/contact_show';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <ContactShowComponent></ContactShowComponent>
        </p>

      </header>
    </div>
  );
}

export default App;
