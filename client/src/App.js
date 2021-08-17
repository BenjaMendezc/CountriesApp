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

        <Route exact path='/' component={Landing} />
        <Route path='/countries' component={NavBar}/>
        <Route exact path='/countries'>
          <CountryCards />
        </Route>
        <Route exact path='/countries/:idPais'>
        	<CountryDetail />
        </Route>
        <Route exact path='/activity' component ={Form} />
        <Route exact path='/countries/about'>
        	<About />
        </Route>

    </div>
  );
}

export default App;
