import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';

function App() {
  return (
    <div className="App">
      <Saludo usuario="Pedro" mensaje="Sos el mejor! nunca lo dudes! <3"></Saludo>
    </div>
  );
}

export default App;
