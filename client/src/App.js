import './App.css';
import {Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <Route path='/main'>
    	Navbar
    </Route>
    <Route exact path='/'>
    	WELCOME
    </Route>
    <Route exact path='/main'>
      <h1>Henry Countries</h1>
      <p>aca van los datos del main :)</p>
    </Route>
    <Route exact path='/main/details'>
    	<h1>Aca van los detalles :)</h1>
    </Route>
    <Route exact path='/main/form'>
    	<h1>Desde aca creo actividades :)</h1>
    </Route>
    </div>
  );
}

export default App;
