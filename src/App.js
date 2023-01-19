import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/Greeting';
import GreetingF from './components/pure/GreetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Greeting name="Adriana"></Greeting>*/}
        {/*<GreetingF name="Adriana"></GreetingF>*/}

        {/*<TaskListComponent></TaskListComponent>*/}

        {/*<Ejemplo1></Ejemplo1>*/}

        {/*<Ejemplo2></Ejemplo2>*/}

        {/*<MiComponenteConContexto></MiComponenteConContexto>*/}

        {/*<Ejemplo4 nombre="Adriana"><h3>Contenido H3 Apps Children</h3></Ejemplo4>*/}

        <GreetingStyled name="Adriana"></GreetingStyled>

      </header>
    </div>
  );
}

export default App;
