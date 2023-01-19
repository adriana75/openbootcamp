import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/Greeting';
import GreetingF from './components/pure/GreetingF';
import TaskListComponent from './components/container/task_list';
import ContactoComponent from './components/Ejercicio1/contacto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Greeting name="Adriana"></Greeting>*/}
        {/*<GreetingF name="Adriana"></GreetingF>*/}

        {/*<TaskListComponent></TaskListComponent>*/}

        <ContactoComponent></ContactoComponent>

      </header>
    </div>
  );
}

export default App;
