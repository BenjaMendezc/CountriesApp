import './App.css';
import React from 'react'
import {Route} from 'react-router-dom'
import NavBar from './components/Nav/NavBar.jsx'
import CountryCards from './components/CountryCards/CountryCards.jsx'
import Landing from './components/Landing/Landing.jsx'
import Form from './components/Form/Form.jsx'
import CountryDetail from './components/CountryDetail/CountryDetail.jsx'
import About from './components/About/About.jsx'
import {connect} from 'react-redux'
import {getCountries} from './actions/actions.js'


function App(props) {

    React.useEffect(()=>{
        props.getCountries()
    }, [])

  return (
    <div className="App">

            <Route exact path='/' component={Landing} />
            <Route path='/countries' component={NavBar}/>
            <Route exact path='/countries/about'>
            	<About />
            </Route>
            <Route exact path='/countries/params/:idPais' component={CountryDetail}/>
            <Route exact path='/countries'>
              <CountryCards countries={props.countries}/>
            </Route>
            <Route exact path='/activity' component ={Form} />

    </div>
  );
}

function mapStateToProps(state){
    return{
        testState: state.testState,
        countries: state.countries
    }
}

export default connect(mapStateToProps, {getCountries})(App);
