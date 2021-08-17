import './App.css';
import {Route} from 'react-router-dom'
import NavBar from './components/Nav/NavBar.jsx'
import CountryCards from './components/CountryCards/CountryCards.jsx'
import Landing from './components/Landing/Landing.jsx'
import Form from './components/Form/Form.jsx'
import CountryDetail from './components/CountryDetail/CountryDetail.jsx'
import About from './components/About/About.jsx'


function App() {
  return (
    <div className="App">
    <Route path='/main' component={NavBar}/>
    <Route exact path='/' component={Landing} />
    <Route exact path='/main'>
      <CountryCards />
    </Route>
    <Route exact path='/main/details'>
    	<CountryDetail />
    </Route>
    <Route exact path='/main/form' component ={Form} />
    <Route exact path='/main/about'>
    	<About />
    </Route>
    </div>
  );
}

export default App;
