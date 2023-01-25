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
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import TaskFormik from './components/pure/forms/taskFormik';


function App() {
  return (
    <div className="App">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<Greeting name="Adriana"></Greeting>*/}
        {/*<GreetingF name="Adriana"></GreetingF>*/}

        {/*<TaskListComponent></TaskListComponent>*/}

        {/*<Ejemplo1></Ejemplo1>*/}

        {/*<Ejemplo2></Ejemplo2>*/}

        {/*<MiComponenteConContexto></MiComponenteConContexto>*/}

        {/*<Ejemplo4 nombre="Adriana"><h3>Contenido H3 Apps Children</h3></Ejemplo4>*/}

        {/*<GreetingStyled name="Adriana"></GreetingStyled>*/}

        {/*<Father></Father>*/}

        {/*<OptionalRender></OptionalRender>*/}

        {/*<LoginFormik></LoginFormik>*/}

        {/*<RegisterFormik></RegisterFormik>*/}

        <TaskFormik></TaskFormik>
    </div>
  );
}

export default App;
